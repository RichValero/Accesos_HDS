import React from "react";

const RequestForm = () => {
  return (
    <section>
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-4 px-4 py-4">
        <form>
          <label htmlFor="">Nombre y Apellido</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresar nombre del solicitante"
            className="inputformat"
            required
            onChange={() => {}}
          />
          <label htmlFor="rut">R.U.T.</label>
          <input
            type="number"
            name="rut"
            id="rut"
            placeholder="12.345.678-9"
            className="inputformat"
            required
            onChange={() => {}}
          />
          <label htmlFor="department">Servicio o Departamento</label>
          <input
            type="text"
            name="department"
            id="department"
            className="inputformat"
            placeholder="Gestion de la Demanda"
            required
            onChange={() => {}}
          />
          <label htmlFor="role">Cargo</label>
          <input
            type="text"
            name="role"
            id="role"
            className="inputformat"
            placeholder="Ingresar nombre del solicitante"
            required
            onChange={() => {}}
          />
          <label htmlFor="phone">Telefono Directo</label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="inputformat"
            placeholder="Ingresar Telefono"
            required
            onChange={() => {}}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="name"
            id="name"
            className="inputformat"
            placeholder="correo@hsalvador.cl"
            required
            onChange={() => {}}
          />
          <div>
            <p>Datos del Usuario de la VPN</p>
          </div>
          <label htmlFor="username">Nombre de Persona</label>
          <input
            type="text"
            name="username"
            id="username"
            className="inputformat"
            placeholder="Nombre"
            required
            onChange={() => {}}
          />
          <label htmlFor="rut2">R.U.T</label>
          <input
            type="text"
            name="rut2"
            id="rut2"
            className="inputformat"
            placeholder="12.345.678-9"
            required
            onChange={() => {}}
          />
          <label htmlFor="bussiness">Empresa o Establecimiento</label>
          <input
            type="text"
            name="bussiness"
            id="bussiness"
            className="inputformat"
            placeholder="Empresa"
            required
            onChange={() => {}}
          />
          <label htmlFor="phone2">Telefono</label>
          <input
            type="number"
            name="phone2"
            id="phone2"
            className="inputformat"
            placeholder="999999999"
            required
            onChange={() => {}}
          />
          <label htmlFor="role2">Cargo</label>
          <input
            type="text"
            name="role2"
            id="role2"
            className="inputformat"
            placeholder="Cargo"
            required
            onChange={() => {}}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputformat"
            placeholder="correo@hsalvador.cl"
            required
            onChange={() => {}}
          />

          <div>
            <p>Datos del responsable de autorizacion</p>
          </div>
          <label htmlFor="username">Nombre de Persona</label>
          <input
            type="text"
            name="username"
            id="username"
            className="inputformat"
            placeholder="Nombre"
            required
            onChange={() => {}}
          />
          <label htmlFor="rut2">R.U.T</label>
          <input
            type="text"
            name="rut2"
            id="rut2"
            className="inputformat"
            placeholder="12.345.678-9"
            required
            onChange={() => {}}
          />
          <label htmlFor="bussiness">Servicio o Departamento</label>
          <input
            type="text"
            name="bussiness"
            id="bussiness"
            className="inputformat"
            placeholder="Empresa"
            required
            onChange={() => {}}
          />
          <label htmlFor="phone2">Telefono</label>
          <input
            type="number"
            name="phone2"
            id="phone2"
            className="inputformat"
            placeholder="999999999"
            required
            onChange={() => {}}
          />
          <label htmlFor="role2">Cargo</label>
          <input
            type="text"
            name="role2"
            id="role2"
            className="inputformat"
            placeholder="Cargo"
            required
            onChange={() => {}}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputformat"
            placeholder="correo@hsalvador.cl"
            required
            onChange={() => {}}
          />
        </form>
      </div>
    </section>
  );
};

export default RequestForm;
