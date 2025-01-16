import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EmailRequestSchema } from "../schemas/emailRequestSchema";

export const EmailRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailRequestSchema),
  });

  return (
    <section className="pt-5 min-h-screen mx-auto max-w-xl">
      <div className="flex flex-col justify-center items-center ring-1 ring-gray-300 rounded-xl p-8">
        <div className="pb-4 text-center">
          <legend className="text-3xl font-bold text-[#191F34]">
            Solicitud de Creacion de Correo
          </legend>
        </div>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="w-full space-y-6"
        >
          <div className="font-semibold ">
            <label htmlFor="firstname" className="text-lg pb-2">
              Nombre:
            </label>
            <input
              {...register("firstname")}
              placeholder="Nombre"
              className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
            />
          </div>
          <div className="font-semibold">
            <label htmlFor="lastname" className="text-lg pb-2">
              Apellido:
            </label>
            <input
              {...register("lastname")}
              placeholder="Apellido"
              className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
            />
          </div>
          <div className="font-semibold">
            <label htmlFor="firstname" className=" text-lg pb-2">
              Departamento:
            </label>
            <input
              {...register("firstname")}
              className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
              placeholder="Departamento"
            />
          </div>
          <div className="font-semibold">
            <label htmlFor="firstname" className=" text-lg pb-2">
              Correo:
            </label>
            <input
              {...register("firstname")}
              className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
              placeholder="correo@hsalvador.cl"
            />
          </div>
        </form>
        <button className="w-full bg-primary text-white py-2 rounded-md mt-5 font-bold text-lg">
          Registrar
        </button>
      </div>
    </section>
  );
};
