import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserCreationSchema } from "../schemas/userCreationSchema";
import { FormLayout } from "@components/forms";
import { InputField } from "../../shared/components/InputField";
import { useState } from "react";

export const CreateUserForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserCreationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Algo no funciona, intentalo de nuevo");
      }
      const responseData = await response.json();
      setSuccessMessage("Usuario creado exitosamente", responseData);
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
      setSuccessMessage("Error al registrar usuario");
    }
  };

  return (
    <FormLayout title="Registrar Usuario">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {successMessage && <p>{successMessage}</p>}
        <InputField
          label="Nombre:"
          name="first_name"
          register={register}
          errors={errors}
          placeholder="Diego"
        />
        <InputField
          label="Apellido:"
          name="last_name"
          register={register}
          errors={errors}
          placeholder="Ortiz"
        />
        <InputField
          label="Servicio o Departamento:"
          name="department"
          register={register}
          errors={errors}
          placeholder="Departamento de Informatica"
        />
        <InputField
          label="Correo:"
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder="correo@hsalvador.cl"
        />
        <InputField
          label="Contraseña:"
          name="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="*******"
        />
        <div className="flex text-gray-400 justify-center pt-5">
          <select
            {...register("role")}
            className="font-bold w-1/2 mb-5 bg-slate-100 text-gray-700 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-200 block  p-2.5 rounded-l-lg py-1 px-4"
          >
            <option value="user" className="font-bold ">
              Usuario
            </option>
            <option value="admin" className="font-bold">
              Administrador
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md mt-5 font-bold text-lg"
        >
          Registrar
        </button>
      </form>
    </FormLayout>
  );
};
