import { Eye, Pencil, Trash2 } from "lucide-react";
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
        console.error("Error al obtener datos", error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <section className="w-full">
      <div className="shadow ring-1 ring-black ring-opacity-5 bg-white rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-center">Nombre</th>
              <th className="py-3 px-4 text-center">Correo</th>
              <th className="py-3 px-4 text-center">Departamento</th>
              <th className="py-3 px-4 text-center">Rol</th>
              <th className="py-3 px-4 text-center">Estado</th>
              <th className="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 font-poppins font-medium"
              >
                <td className="whitespace-nowrap py-4 px-4 text-center">
                  {user.id}
                </td>
                <td className="py-4 px-4 text-center">
                  {user.firstname} {user.lastname}
                </td>
                <td className="py-4 px-4 text-center">{user.email}</td>
                <td className="py-4 px-4 text-center">{user.department}</td>
                <td className="py-4 px-4 text-center">{user.role}</td>
                <td className="py-4 px-4 text-center">
                  <div className="bg-red-300 text-red-700 rounded-md font-semibold">
                    Inactivo
                  </div>
                </td>
                <td className="py-4 px-4 text-center flex justify-center items-center gap-2">
                  <Pencil
                    strokeWidth={2}
                    color="#ededed"
                    className="rounded-xl p-1 cursor-pointer bg-[#238c2f] hover:bg-[#2db63d] shadow-md"
                    size={30}
                  />
                  <Eye
                    strokeWidth={2}
                    color="#ededed"
                    onClick={() => {
                      onToggleExpand(row.id);
                    }}
                    className="rounded-xl p-1 cursor-pointer bg-[#275eb6] hover:bg-[#2474f3] shadow-md"
                    size={30}
                  />
                  <Trash2
                    strokeWidth={2}
                    color="#ededed"
                    className="bg-[#a41d1d] rounded-xl p-1 cursor-pointer hover:bg-[#d42c2c] shadow-md"
                    size={30}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
