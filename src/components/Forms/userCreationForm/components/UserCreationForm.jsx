import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserCreationSchema } from "../schemas/userCreationSchema";
import { FormLayout } from "@components/forms";
import { InputField } from "../../shared/components/InputField";

export const UserCreationForm = () => {
  const [successMessage, setSuccessMessage] = React.useState("");

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
          title="Nombre"
          register={register}
          name="first_name"
          placeholder="Diego"
        />
        <InputField
          title="Apellido"
          register={register}
          name="last_name"
          placeholder="Ortiz"
        />
        <InputField
          title="Departamento"
          register={register}
          name="department"
          placeholder="Departamento de Informatica"
        />
        <InputField
          title="Correo"
          register={register}
          type="email"
          name="email"
          placeholder="correo@hsalvador.cl"
        />
        <InputField
          title="Contraseña"
          register={register}
          name="password"
          type="password"
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
