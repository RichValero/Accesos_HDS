import { ActionButtons } from "@/components/Table/shared/components/ActionButtons";
import {
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableLayout,
} from "@/components/Table/shared/components/TableLayout";
import React from "react";
import { useEffect, useState } from "react";
export const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/all", {
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
    <TableLayout>
      <TableHeader>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Nombre</TableHeaderCell>
        <TableHeaderCell>Correo</TableHeaderCell>
        <TableHeaderCell>Departamento</TableHeaderCell>
        <TableHeaderCell>Rol</TableHeaderCell>
        <TableHeaderCell>Estado</TableHeaderCell>
        <TableHeaderCell>Acciones</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <tr
            key={user.user_id}
            className="hover:bg-gray-100 font-poppins font-medium"
          >
            <TableCell>{user.user_id}</TableCell>
            <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.department}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              {" "}
              <div className="bg-red-300 text-red-700 rounded-md font-semibold">
                Inactivo
              </div>
            </TableCell>
            <TableCell>
              <ActionButtons
                onEdit={() => {}}
                onView={() => {}}
                onDelete={() => {}}
              />
            </TableCell>
          </tr>
        ))}
      </TableBody>
    </TableLayout>
  );
};
