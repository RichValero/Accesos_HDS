import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormLayout } from "@/components/forms";
import { EmailRequestSchema } from "@/components/forms";
import { InputField } from "../../shared/components/InputField";
import { useState } from "react";

export const EmailRequestForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailRequestSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/email/requestregister",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Algo no funciona, intentalo de nuevo");
      }
      const responseData = await response.json();
      setSuccessMessage("Solicitud enviada exitosamente", responseData);
    } catch (error) {
      console.error("Error al generar solicitud:", error.message);
      setErrorMessage("Error al generar solicitud", error.message);
    }
  };

  return (
    <FormLayout
      title="Solicitud de Creacion de correo"
      label="Ingresa los datos del funcionario(a) que requiere el correo"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Nombre:"
          name="first_name"
          register={register}
          errors={errors}
          placeholder="Nombre"
        />
        <InputField
          label="Apellidos:"
          name="last_name"
          register={register}
          errors={errors}
          placeholder="Primer y Segundo"
        />
        <InputField
          label="Servicio o Departamento:"
          name="department"
          register={register}
          errors={errors}
          placeholder="Departamento o servicio"
        />
        <InputField
          label="Cargo:"
          name="role"
          register={register}
          errors={errors}
          placeholder="EU / TENS / COORDINADOR(A)"
        />
        <InputField
          label="Anexo:"
          name="phone"
          register={register}
          errors={errors}
          placeholder="123456"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md mt-5 font-bold text-lg"
        >
          Registrar
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </FormLayout>
  );
};
