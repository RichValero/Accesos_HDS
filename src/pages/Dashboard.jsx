import { Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";

import "@fontsource/poppins";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Forms/Button";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/userlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener la lista de usuarios");
        }
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <section className="flex gap-5">
      <SideBar />
      <div className="w-full px-10 py-5">
        {/* DASHBOARD NAVBAR START*/}
        {/* <div className="flex justify-end items-center w-full mt-10 mb-3 mx-auto">
      <Link to="/register">
        <button
          type="button"
          className="px-3 gap-2 text-white bg-primary rounded-lg flex items-center font-poppins"
        >
          <Plus size={32} strokeWidth={3} color="#f2f2f2" />
          Agregar Usuario
        </button>
      </Link>
    </div> */}
        {/* DASHBOARD NAVBAR END  */}

        {/* DASHBOARD CONTENT */}
        <Button variant="dashboard" size="dashboard">
          Usuarios
        </Button>
        <Button variant="dashboard" size="dashboard">
          Todas las solicitudes
        </Button>
        <Button variant="dashboard" size="dashboard">
          Activas
        </Button>
        <Button variant="dashboard" size="dashboard">
          Pendientes
        </Button>
        <div className="flex flex-col shadow-xl h-screen mb-10 bg-white">
          <div className="">
            <div className="flex flex-1 justify-evenly items-center">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-primary text-white text-center">
                    <th className="py-1 border p-4">ID</th>
                    <th className="py-1 border p-4">Nombre</th>
                    <th className="py-1 border p-4">Correo</th>
                    <th className="py-1 border p-4">Departamento</th>
                    <th className="py-1 border p-4">Rol</th>
                    <th className="py-1 border p-4">Estado</th>
                    <th className="py-1 border p-4">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="even:bg-white odd:bg-slate-100"
                    >
                      <td className="tablerow">{user.id}</td>
                      <td className="tablerow">
                        {user.firstname} {user.lastname}
                      </td>
                      <td className="tablerow-nonecapitalize w-1/5">
                        {user.email}
                      </td>
                      <td className="tablerow w-1/4">{user.department}</td>
                      <td className="tablerow">{user.role}</td>
                      <td className="tablerow">{user.role}</td>
                      <td className="tablerow w-1/6">
                        Editar - Eliminar - Ver
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

/*
TABLA DE USUARIOS

ID 
NOMBRE
CORREO
DEPARTAMENTO
ESTADO DEL USUARIO
ROL DEL USUARIO
ACCIONES

---------------------------------------

TABLA SOLICITUDES
ID
NOMBRE
CORREO
DEPARTAMENTO
FECHA
ESTADO
ACCIONES

NOTA: DROPDOWN PARA VISUALIZAR EL DETALLE DE LA SOLICITUD

*/
