import { Loader2 } from "lucide-react";
import React from "react";
import DataSection from "./DataSection";

const ExpandedRowContent = ({ userData, isLoading }) => {
  if (isLoading) {
    <td colSpan="4" className="p-10">
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-800" />
      </div>
    </td>;
  }

  const userFields = [
    { label: "Nombre Completo", value: userData.fullname_2 },
    { label: "R.U.T.:", value: userData.rut_2 },
    { label: "Departamento", value: userData.department_2 },
    { label: "Anexo", value: userData.phone_2 },
    { label: "Cargo", value: userData.cargo_2 },
    { label: "Correo", value: userData.email_2 },
  ];

  const autorizationFields = [
    { label: "Nombre Completo", value: userData.fullname_3 },
    { label: "R.U.T.:", value: userData.rut_3 },
    { label: "Departamento", value: userData.department_3 },
    { label: "Anexo", value: userData.phone_3 },
    { label: "Cargo", value: userData.cargo_3 },
    { label: "Correo", value: userData.email_3 },
  ];
  const deviceFields = [
    { label: "Nombre Completo", value: userData.ipv4 },
    { label: "R.U.T.:", value: userData.ports },
    { label: "Departamento", value: userData.date_time },
  ];
  const othersFields = [
    { label: "Justificacion de Solicitud", value: userData.justif },
    { label: "Observaciones", value: userData.observations },
  ];

  return (
    <td colSpan="10" className="p-10">
      <div className="grid grid-cols-4">
        <DataSection title="Datos del usuario de VPN" fields={userFields} />
        <DataSection
          title="Responsable de Autorizacion"
          fields={autorizationFields}
        />
        <DataSection
          title="Datos del Activo de Información"
          fields={deviceFields}
        />
        <DataSection
          title="Justificacion y Observaciones"
          fields={othersFields}
        />
      </div>
    </td>
  );
};

export default ExpandedRowContent;
