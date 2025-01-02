import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInCard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError(errorData.message || "Algo no funciona, intentalo de nuevo");
      }

      const data = await response.json();
      const token = data.token;

      localStorage.setItem("authToken", token);

      setSuccess("Inicio de sesion exitoso, redirigiendo");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Usuario o contraseña incorrectos"
      );
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg flex w-2/3 max-w-5xl overflow-hidden">
        <div className="w-1/2 bg-primary text-white p-8 flex flex-col">
          <div className="flex flex-col justify-center items-center space-y-2.5">
            <h2 className="text-4xl font-bold font-poppins">Bienvenido</h2>
            <h3 className="text-lg mb-10 font-semibold font-poppins">
              Inicio de sesion a portal de informatica.
            </h3>
          </div>
          <p className="justify-center text-lg mt-4 font-poppins space-y-4">
            Este portal te ayudara a gestionar las solicitudes realizadas a
            informatica.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-lg drop-shadow-lg ">
          <div className="flex flex-row justify-center items-center mb-10 ">
            <img
              src="./assets/hds.png"
              alt="logo"
              className="w-10 h-10 object-contain mx-3"
            />
            <h1 className="font-bold text-xl text-primary">
              HOSPITAL DEL SALVADOR
            </h1>
          </div>
          <div className="flex justify-center">
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col pb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium text-[#111827]"
                >
                  Correo
                </label>
                <div className="relative w-[350px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="px-3 border-2 border-gray-500 rounded-md h-10 mx-auto mb-3  w-full"
                    required
                    placeholder="correo@hsalvador.cl"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-medium text-[#111827]"
                >
                  Contraseña
                </label>
                <div className="relative w-[350px]">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="px-3 border-2 border-gray-500 rounded-md h-10 mb-4 w-full text-slate-700 "
                    required
                    placeholder="********"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-center pt-5">
                <button
                  type="submit"
                  className="w-1/2 text-white bg-[#191f34] focus:ring-2 focus:outline-none p-2 mb-10 rounded-xl"
                >
                  Iniciar Sesión
                </button>
              </div>
              <p className="flex justify-center text-center font-poppins">
                Cuenta son solo para jefaturas. <br />
                Son creadas por informatica.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInCard;
