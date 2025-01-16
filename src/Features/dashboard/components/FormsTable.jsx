import React from "react";
import { useEffect, useState } from "react";
// import { Button } from "../../../components/Forms/index";
import { Loader2 } from "lucide-react";
import { TableRow } from "../../../components/Table/TableRow";
export const FormTable = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(new Set());

  const handleToggleExpand = (rowId) => {
    const newExpandedRow = new Set(expandedRow);
    if (newExpandedRow.has(rowId)) {
      newExpandedRow.delete(rowId);
    } else {
      newExpandedRow.add(rowId);
    }
    setExpandedRow(newExpandedRow);
  };

  //FETCHING DATA START
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://localhost:5000/form-data/formlist",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error al obtener la lista de usuarios");
        }
        const data = await response.json();

        setForms(data);
        setError(null);
      } catch (error) {
        setError("Error al obtener usuarios:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllUsers();
  }, []);
  //FETCHING DATA END

  //HANDLING LOADING - START
  if (isLoading && forms.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }
  //HANDLING LOADING - END

  //HANDLING ERROR - START
  if (error) {
    return <div clasName="text-center text-red-600 p-4">{error}</div>;
  }
  //HANDLING ERROR - END

  return (
    <section className="w-full">
      <div className="shadow ring-1 ring-black ring-opacity-5 rounded-lg bg-white overflow-x-auto">
        <table className=" min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-center">Nombre</th>
              <th className="py-3 px-4 text-center">Correo</th>
              <th className="py-3 px-4 text-center">Departamento</th>
              <th className="py-3 px-4 text-center">Fecha</th>
              <th className="py-3 px-4 text-center">Estado</th>
              <th className="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {forms.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                isExpanded={expandedRow.has(row.id)}
                onToggleExpand={handleToggleExpand}
                isLoading={isLoading}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
