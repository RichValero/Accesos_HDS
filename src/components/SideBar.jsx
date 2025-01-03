import { UserRoundPlus } from "lucide-react";
import React from "react";

export const SideBar = () => {
  return (
    <div className=" w-1/5">
      <div className="flex flex-col pt-5 items-center h-screen bg-white shadow-lg rounded-md">
        <div className="flex  items-center gap-2">
          <UserRoundPlus />
          <p>Crear Usuario</p>
        </div>
        <p>SideBar</p>
        <p>SideBar</p>
        <p>SideBar</p>
      </div>
    </div>
  );
};
