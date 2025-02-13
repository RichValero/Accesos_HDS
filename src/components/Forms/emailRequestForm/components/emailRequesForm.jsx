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
      const response = await fetch("http://localhost:3000/email-request", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
      label="Ingrese los datos del funcionario(a)"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Nombre:"
          name="firstName"
          register={register}
          errors={errors}
          placeholder="Ingrese nombre"
        />
        <InputField
          label="Apellidos:"
          name="lastName"
          register={register}
          errors={errors}
          placeholder="Ingrese apellidos"
        />
        <InputField
          label="Servicio o Departamento:"
          name="department"
          register={register}
          errors={errors}
          placeholder="Ingrese departamento o servicio"
        />
        <InputField
          label="Cargo:"
          name="role"
          register={register}
          errors={errors}
          placeholder="Ingrese cargo del funcionario(a)"
        />
        <InputField
          label="Anexo:"
          name="phone"
          register={register}
          errors={errors}
          placeholder="Ingrese anexo del funcionario(a)"
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
