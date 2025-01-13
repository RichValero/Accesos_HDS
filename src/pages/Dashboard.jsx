import "@fontsource/poppins";
import { Button } from "../components/Forms";
import { SideBar } from "../components/Layout";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex gap-5 h-screen">
      <SideBar />
      <div className="w-full px-10 py-5">
        <Button
          variant="dashboard"
          size="dashboard"
          onClick={() => handleTabChange("users")}
        >
          Usuarios
        </Button>
        <Button
          variant="dashboard"
          size="dashboard"
          onClick={() => handleTabChange("vpn")}
        >
          Solicitudes VPN
        </Button>
        <Button variant="dashboard" size="dashboard">
          Solicitud de Correos
        </Button>
        <Button variant="dashboard" size="dashboard">
          Activas
        </Button>
        <Button variant="dashboard" size="dashboard">
          Pendientes
        </Button>
        {activeTab === "users" ? <UsersList /> : <FormList />}
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
