import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserCreationSchema } from "../schemas/userCreationSchema";
import { FormLayout } from "@components/Forms";

export const UserCreationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserCreationSchema),
  });

  return (
    <FormLayout title="Registrar Usuario">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3 font-medium">
          <label htmlFor="fullname" className="pb-2 ">
            Nombre:
          </label>
          <input
            {...register("firstname")}
            type="text"
            id="firstname"
            placeholder="Nombre"
            className="ring-1 ring-gray-300 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col pb-3 font-medium">
          <label htmlFor="lastname" className="pb-2">
            Apellido:
          </label>
          <input
            {...register("lastname")}
            type="text"
            id="lastname"
            placeholder="Apellido"
            className="ring-1 ring-gray-300 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col pb-3 font-medium">
          <label htmlFor="department" className="pb-2">
            Departamento:
          </label>
          <input
            {...register("department")}
            type="text"
            id="department"
            placeholder="Departamento"
            className="ring-1 ring-gray-300 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col pb-3 font-medium">
          <label htmlFor="fullname" className="pb-2">
            Correo:
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Correo@hsalvador.cl"
            className="ring-1 ring-gray-300 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col pb-1 font-medium">
          <label htmlFor="password" className="pb-2">
            Cotraseña:
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="**********"
            className="ring-1 ring-gray-300 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex text-gray-400 justify-center pt-5">
          <select
            name="role"
            id="role"
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
      </form>
      <button className="w-full bg-primary text-white py-2 rounded-md mt-5 font-bold text-lg">
        Registrar
      </button>
    </FormLayout>
  );
};
