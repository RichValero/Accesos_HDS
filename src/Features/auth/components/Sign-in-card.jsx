import { InputField } from "@/components/Forms/shared/components/InputField";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authState";
import { useForm } from "react-hook-form";

export const SignInCard = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const values = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = values;

  const onSubmit = async (data) => {
    try {
      await login(data);

      //navitate to dashboard intended route or dashboard on success
      const intendedPath = location.state?.from?.pathname || "/dashboard";
      navigate(intendedPath, { replace: true });
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Usuario o contraseña incorrecto. Porfavor intenta de nuevo",
      });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-white ring-1 ring-gray-300 rounded-lg shadow-lg flex w-1/10 max-w-5xl overflow-hidden">
        <div className="w-1/3 bg-primary text-white p-8 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center space-y-2.5">
            <h2 className="text-4xl font-bold ">BIENVENIDO</h2>
            <h3 className="text-lg mb-10 font-semibold font-poppins">
              Inicio de sesion a portal de informatica.
            </h3>
          </div>
          <p className="justify-center text-lg mt-4 font-poppins space-y-4">
            Este portal te ayudara a gestionar las solicitudes realizadas a
            informatica.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-lg">
          <div className="flex justify-center">
            <form
              className="flex flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center mb-10 pl-10">
                <img
                  src="./assets/hds.png"
                  alt="logo"
                  className="w-10 h-10 object-contain mx-3"
                />
                <h1 className="items-center font-semibold text-2xl">
                  HOSPITAL DEL SALVADOR
                </h1>
              </div>
              <InputField
                label="Correo"
                name="email"
                type="email"
                register={register}
                errors={errors}
                disabled={isSubmitting}
                placeholder="correo@hsalvador.cl"
              />
              <InputField
                label="Contraseña"
                name="password"
                type="password"
                register={register}
                errors={errors}
                disabled={isSubmitting}
                placeholder="contraseña"
              />
              <div className="flex justify-center pt-5">
                <button
                  type="submit"
                  className="w-1/2 text-white bg-[#191f34] focus:ring-2 focus:outline-none p-2 mb-10 rounded-md"
                >
                  {isSubmitting ? "Redirigiendo..." : "Iniciar sesion"}
                </button>
              </div>
              <p className="flex justify-center text-center font-poppins">
                Cuentas creadas por informatica.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
