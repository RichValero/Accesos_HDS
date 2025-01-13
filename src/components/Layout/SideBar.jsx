import { House, UserRoundPlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="">
      <div className="flex flex-col pt-10 items-center min-h-screen space-y-5 bg-white rounded-xl shadow-lg">
        <div
          className="flex items-center gap-10 hover:bg-slate-200 hover:rounded-md 
        hover:cursor-pointer hover:transition-colors duration-500 hover:px-2 hover:py-1"
        >
          <House size={30} />
          <Link to="/dashboard">
            <p>Home</p>
          </Link>
        </div>
        <div
          className="flex items-center gap-3 hover:bg-slate-200 hover:rounded-md 
        hover:cursor-pointer hover:transition-colors duration-500 hover:px-2 hover:py-1"
        >
          <UserRoundPlusIcon size={30} />
          <Link to="/register">
            <p>Crear Usuario</p>
          </Link>
        </div>
        <div
          className="flex items-center gap-3 hover:bg-slate-200 hover:rounded-md 
        hover:cursor-pointer hover:transition-colors duration-500 hover:px-2 hover:py-1"
        >
          <UserRoundPlusIcon size={30} />
          <Link to="/stepone">
            <p>Solicitud VPN</p>
          </Link>
        </div>
        <div
          className="flex items-center gap-3 hover:bg-slate-200 hover:rounded-md 
        hover:cursor-pointer hover:transition-colors duration-500 hover:px-2 hover:py-1"
        >
          <UserRoundPlusIcon size={30} />
          <Link to="/register">
            <p>Solicitud de Correo</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
