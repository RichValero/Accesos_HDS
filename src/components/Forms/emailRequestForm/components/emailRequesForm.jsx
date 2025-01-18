import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormLayout } from "@/components/forms";
import { EmailRequestSchema } from "@/components/forms";

export const EmailRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailRequestSchema),
  });

  return (
    <FormLayout title="Solicitud de Creacion de correo">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="pt-5 font-semibold">
          <label htmlFor="firstname" className="block text-lg pb-2">
            Nombre:
          </label>
          <input
            {...register("firstname")}
            placeholder="Nombre"
            className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
          />
        </div>
        <div className="pt-5 font-semibold">
          <label htmlFor="lastname" className="block text-lg pb-2">
            Apellido:
          </label>
          <input
            {...register("lastname")}
            placeholder="Apellido"
            className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
          />
        </div>
        <div className="pt-5 font-semibold">
          <label htmlFor="firstname" className="block text-lg pb-2">
            Departamento:
          </label>
          <input
            {...register("firstname")}
            className="ring-1 ring-gray-300 rounded-md py-2 px-4 w-full"
            placeholder="Departamento"
          />
        </div>
        <div className="pt-5 font-semibold">
          <label htmlFor="firstname" className="block text-lg pb-2">
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
    </FormLayout>
  );
};
