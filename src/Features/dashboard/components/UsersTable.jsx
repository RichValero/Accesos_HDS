import React from "react";
import { useEffect, useState } from "react";
export const UsersTable = () => {
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
    <section className="container mx-auto">
      <div className="shadow ring-1 ring-black ring-opacity-5 bg-white">
        <table className="divide-y divide-gray-300 even:bg-gray-50 odd:bg-white">
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
              <tr key={user.id} className="even:bg-white odd:bg-slate-100">
                <td className="tablerow">{user.id}</td>
                <td className="tablerow">
                  {user.firstname} {user.lastname}
                </td>
                <td className="tablerow w-1/5">{user.email}</td>
                <td className="tablerow w-1/4">{user.department}</td>
                <td className="tablerow">{user.role}</td>
                <td className="tablerow">{user.role}</td>
                <td className="tablerow w-1/6">Editar - Eliminar - Ver</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
