import React from "react";
import { useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import { Button } from "../Forms/index";
export const FormList = () => {
  const [forms, setForms] = useState([]);
  const [expandedRow, setExpandedRow] = useState(new Set());

  const toggleRow = (id) => {
    const newExpandedRow = new Set(expandedRow);
    if (newExpandedRow.has(id)) {
      newExpandedRow.delete(id);
    } else {
      newExpandedRow.add(id);
    }
    setExpandedRow(newExpandedRow);
  };

  //FETCHING DATA START
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
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
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchAllUsers();
  }, []);

  //FETCHING DATA END

  const toggleForm = (formId) => {
    setExpandedForm((prev) =>
      prev.includes(formId) ? prev.filter((form) => form !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col shadow-xl h-screen mb-10 bg-white">
      <div className="">
        <div className="flex flex-1 justify-evenly items-center">
          <table className="w-full border-collapse shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-white text-center">
                <th className="py-1 border p-4">ID</th>
                <th className="py-1 border p-4">Nombre</th>
                <th className="py-1 border p-4">Correo</th>
                <th className="py-1 border p-4">Departamento</th>
                <th className="py-1 border p-4">Fecha</th>
                <th className="py-1 border p-4">Estado</th>
                <th className="py-1 border p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((row) => (
                <React.Fragment>
                  <tr
                    key={row.id}
                    className="even:bg-white odd:bg-slate-100 hover:cursor-pointer"
                    onClick={() => toggleRow(row.id)}
                    aria-label={expandedRow.has(row.id) ? "Collapse" : "Expand"}
                  >
                    <td className="tablerow">{row.id}</td>
                    <td className="tablerow">{row.fullname}</td>
                    <td className="tablerow">{row.email}</td>
                    <td className="tablerow w-1/4">{row.department}</td>
                    <td className="tablerow">{row.date_time}</td>
                    <td className="tablerow bg-green-500">Activo</td>
                    <td className="tablerow w-1/6">Editar - Eliminar - Ver</td>
                  </tr>
                  {expandedRow.has(row.id) && (
                    <tr key={row.id} className="border-b border-gray-300 ">
                      <td colSpan="6" className="p-10">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-4 ">
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Datos del Usuario de la VPN
                            </h3>
                            <dl className="mt-2 text-sm">
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Nombre Completo
                                </dt>
                                <dd className="mt-1">{row.fullname_2}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  R.U.T.:
                                </dt>
                                <dd className="mt-1">{row.rut_2}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Departamento
                                </dt>
                                <dd className="mt-1">{row.department_2}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Anexo
                                </dt>
                                <dd className="mt-1">{row.phone_2}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Cargo
                                </dt>
                                <dd className="mt-1">{row.cargo_2}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Correo
                                </dt>
                                <dd className="mt-1">{row.email_2}</dd>
                              </div>
                            </dl>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Responsable de Autorizacion
                            </h3>
                            <dl className="mt-2 text-sm">
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Nombre Completo
                                </dt>
                                <dd className="mt-1">{row.fullname_3}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  R.U.T.:
                                </dt>
                                <dd className="mt-1">{row.rut_3}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Departamento
                                </dt>
                                <dd className="mt-1">{row.department_3}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Anexo
                                </dt>
                                <dd className="mt-1">{row.phone_3}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Cargo
                                </dt>
                                <dd className="mt-1">{row.cargo_3}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Correo
                                </dt>
                                <dd className="mt-1">{row.email_3}</dd>
                              </div>
                            </dl>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Datos del Activo de Información
                            </h3>
                            <dl className="mt-2 text-sm">
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Direccion IP
                                </dt>
                                <dd className="mt-1">{row.ipv4}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Puertos y Protocolos
                                </dt>
                                <dd className="mt-1">{row.ports}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Fecha
                                </dt>
                                <dd className="mt-1">{row.date_time}</dd>
                              </div>
                            </dl>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Datos del Activo de Información
                            </h3>
                            <dl className="mt-1 text-sm">
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Justificacion de Solicitud
                                </dt>
                                <dd className="mt-1">{row.justif}</dd>
                              </div>
                              <div className="mt-1">
                                <dt className="font-medium text-gray-600">
                                  Observaciones
                                </dt>
                                <dd className="mt-1">{row.observations}</dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
{
  /* <button
                    onClick={() => toggleRow(row.id)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {expandedRows.includes(row.id) ? "➖" : "➕"}
                  </button>
                </td>
              </tr>
              {expandedRows.includes(row.id) && (
                <tr className="border-b border-gray-300 bg-gray-50">
                  <td colSpan="4" className="px-4 py-2">
                    <strong>Details:</strong> {row.details}
                  </td>
                </tr>
              )} */
}
