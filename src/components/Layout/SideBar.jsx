import {
  FileSpreadsheet,
  House,
  LogIn,
  MailPlus,
  UserRoundPlusIcon,
} from "lucide-react";
import React from "react";

export const SideBar = () => {
  return (
    <div className="h-full text-white p-4">
      <div className="flex flex-col pt-10 items-center space-y-5 ">
        <nav className="space-y-4 ">
          <a
            href="/login"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
          >
            <LogIn size={30} />
            <span>Iniciar Sesion</span>
          </a>
          <a
            href="/dashboard"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
          >
            <House size={30} />
            <span>Home</span>
          </a>
          <a
            href="/register"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
          >
            <UserRoundPlusIcon size={30} />
            <span>Crear Usuario</span>
          </a>
          <a
            href="/stepone"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
          >
            <FileSpreadsheet size={30} />
            <span>Solicitud VPN</span>
          </a>
          <a
            href="/email"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
          >
            <MailPlus size={30} />
            <span>Solicitud de Correo</span>
          </a>
        </nav>
      </div>
    </div>
  );
};
