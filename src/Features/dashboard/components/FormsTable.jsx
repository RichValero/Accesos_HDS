import React from "react";
import { useEffect, useState } from "react";
// import { Button } from "../../../components/Forms/index";
import { Loader2 } from "lucide-react";
import { TableRow } from "../../../components/Table/TableRow";
import {
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableLayout,
} from "@/components/Table/shared/components/TableLayout";
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
    <TableLayout>
      <TableHeader>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Nombre</TableHeaderCell>
        <TableHeaderCell>Correo</TableHeaderCell>
        <TableHeaderCell>Departamento</TableHeaderCell>
        <TableHeaderCell>Fecha</TableHeaderCell>
        <TableHeaderCell>Estado</TableHeaderCell>
        <TableHeaderCell>Acciones</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {forms.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            isExpanded={expandedRow.has(row.id)}
            onToggleExpand={handleToggleExpand}
            isLoading={isLoading}
          />
        ))}
      </TableBody>
    </TableLayout>
  );
};
