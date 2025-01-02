import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user",
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
      const response = await fetch("http://localhost:5000/users/register", {
        //http://localhost:5000/users/register http://localhost:5001/api/auth/register
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro completado, redirigiendo a inicio de sesion");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setError(data.message || "Error en el registro");
      }
    } catch (err) {
      setError("Algo no funciona, intentalo de nuevo");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
        <div className="flex justify-center items-center text-xl mb-5">
          {/* {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>} */}
        </div>
        <div className="flex flex-row gap-3 pb-4 justify-center">
          <h1 className="text-3xl font-bold text-[#191F34] my-auto">
            Registrar Usuario
          </h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="pb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Nombre
            </label>
            <input
              value={formData.firstname}
              type="text"
              id="name"
              name="firstname"
              className=" mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
              placeholder="Nombre"
              autoComplete="off"
              required
              onChange={handleChange}
            />
          </div>
          <div className="pb-2">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Apellido
            </label>
            <div className="relative text-gray-400">
              <input
                value={formData.lastname}
                type="text"
                name="lastname"
                id="lastname"
                className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="Apellido"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Correo
            </label>
            <div className="relative text-gray-400">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="nombre@hsalvador.cl"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Contraseña
            </label>
            <div className="relative text-gray-400">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="off"
                aria-autocomplete="list"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="role">
            <div className="flex text-gray-400 justify-center">
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
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
          </label>
          <button
            type="submit"
            className="w-full text-[#FFFFFF] bg-[#191F34] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 mt-3"
          >
            Registrar
          </button>
        </form>
      </div>
    </section>
  );
};
