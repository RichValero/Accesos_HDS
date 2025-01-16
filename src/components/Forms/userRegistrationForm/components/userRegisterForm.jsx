import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegistrationSchema } from "../schemas/userRegistrationSchema";

const UserRegisterForm = () => {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });

  return (
    <section className="min-h-screen pt-5 w-1/2 mx-auto max-w-xl">
      <div className="flex flex-col p-8 rounded-xl shadow-md ring-1 ring-slate-100">
        <div className="pb-4 text-center">
          <legend className="text-3xl font-bold text-[#191F34]">
            Registrar Usuario
          </legend>
        </div>
        <form className="flex flex-col" onSubmit={handelSubmit}>
          <div className="flex flex-col pb-2">
            <label htmlFor="fullname" className="pb-2">
              Nombre
            </label>
            <input
              {...register("fullname")}
              type="text"
              id="fullname"
              placeholder="Nombre"
              className="ring-1 ring-gray-300 rounded-md py-2 px-2"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="fullname" className="pb-2">
              Apellido
            </label>
            <input
              {...register("fullname")}
              type="text"
              id="fullname"
              placeholder="Nombre Completo"
              className="ring-1 ring-gray-300 rounded-md py-2 px-2"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="fullname" className="pb-2">
              Departamento
            </label>
            <input
              {...register("fullname")}
              type="text"
              id="fullname"
              placeholder="Nombre Completo"
              className="ring-1 ring-gray-300 rounded-md py-2 px-2"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="fullname" className="pb-2">
              Correo
            </label>
            <input
              {...register("email")}
              type="email"
              id="fullname"
              placeholder="Nombre Completo"
              className="ring-1 ring-gray-300 rounded-md py-2 px-2"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="fullname" className="pb-2">
              Cotraseña
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
              className="font-bold w-1/2 mb-5 bg-gray-50 text-gray-700 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block  p-2.5 rounded-l-lg py-1 px-4"
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
        <button className="w-full bg-primary text-white py-2 rounded-md mt-5">
          Registrar
        </button>
      </div>
    </section>
  );
};

export default UserRegisterForm;
