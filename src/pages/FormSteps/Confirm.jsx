import { useForm } from "react-hook-form";
import { useAppState } from "../../hooks/state";
import {
  Button,
  Field,
  Form,
  Input,
  Section,
  SectionRow,
} from "../../components/Forms";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Confirm = () => {
  const [state] = useAppState();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const submitData = async (data) => {
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/form-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSuccess("Registro completado, redirigiendo a inicio de sesion");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setError(responseData.message || "Error en el registro");
      }
    } catch (err) {}
    setError("Algo no funciona, intentalo de nuevo");
  };

  // SHOWING THE DATA THAT WAS ENTERED BY THE USER FOR IT TO BE CONFIRMED
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <ProgressBar />
      <h1 className="mb-5 flex justify-center items-center text-2xl text-bold font-poppins text-primary">
        Verificacion de Datos
      </h1>
      <Section title="Datos del Solicitante" url="/stepone">
        <SectionRow>
          <div>Nombre y Apellido: </div>
          <div>{state.fullname}</div>
        </SectionRow>

        <SectionRow>
          <div>R.U.T: </div>
          <div>{state.rut}</div>
        </SectionRow>

        <SectionRow>
          <div>Servicio o Departamento: </div>
          <div>{state.department}</div>
        </SectionRow>

        <SectionRow>
          <div>Cargo:</div>
          <div>{state.cargo}</div>
        </SectionRow>

        <SectionRow>
          <div>Anexo</div>
          <div>{state.phone}</div>
        </SectionRow>

        <SectionRow>
          <div>Correo</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <div className="bg-slate-400 rounded-xl h-0.5 w-full mb-5" />
      {/* PERSONAL INFORMATION END */}

      {/* VPN INFORMATION START */}
      <Section title="Datos del Usuario de la VPN" url="/steptwo">
        <SectionRow>
          <div>Nombre y Apellido</div>
          <div>{state.fullname_2}</div>
        </SectionRow>

        <SectionRow>
          <div>R.U.T.</div>
          <div>{state.rut_2}</div>
        </SectionRow>

        <SectionRow>
          <div>Empresa o Establecimiento</div>
          <div>{state.department_2}</div>
        </SectionRow>

        <SectionRow>
          <div>Anexo</div>
          <div>{state.phone_2}</div>
        </SectionRow>

        <SectionRow>
          <div>Cargo</div>
          <div>{state.cargo_2}</div>
        </SectionRow>

        <SectionRow>
          <div>Correo</div>
          <div>{state.email_2}</div>
        </SectionRow>
      </Section>
      <div className="bg-slate-400 rounded-xl h-0.5 w-full mb-5" />
      {/* VPN INFORMATION END */}

      {/* RESPONSABLE INFORMATION START */}

      <Section title="Responsable de Autorizacion" url="/stepthree">
        <SectionRow>
          <div>Nombre y Apellido</div>
          <div>{state.fullname_3}</div>
        </SectionRow>
        <SectionRow>
          <div>R.U.T.</div>
          <div>{state.rut_3}</div>
        </SectionRow>
        <SectionRow>
          <div>Servicio o Departamento</div>
          <div>{state.department_3}</div>
        </SectionRow>
        <SectionRow>
          <div>Anexo</div>
          <div>{state.phone_3}</div>
        </SectionRow>
        <SectionRow>
          <div>Cargo</div>
          <div>{state.cargo_3}</div>
        </SectionRow>
        <SectionRow>
          <div>Correo</div>
          <div>{state.email_3}</div>
        </SectionRow>
      </Section>
      <div className="bg-slate-400 rounded-xl h-0.5 w-full mb-5" />
      {/* RESPONSABLE INFORMATION END */}

      {/*  */}

      <Section title="Datos del Activo de Información" url="/stepfour">
        <SectionRow>
          <div>Direccin IP</div>
          <div>{state.ipv4}</div>
        </SectionRow>
        <SectionRow>
          <div>Puertos y Protocolos</div>
          <div>{state.ports}</div>
        </SectionRow>
        <SectionRow>
          <div className=" rounded-md w-full">
            <div>Fecha de solicitud:</div>
            <div>{state.date_time}</div>
          </div>
        </SectionRow>
        <SectionRow>
          <div className="flex flex-col justify-center space-y-2">
            <div className="mb-4">Justificacion de la solicitud de VPN</div>
            <div className="shadow-md ring-1 ring-gray-400 p-2 rounded-lg">
              {state.justif}
            </div>
          </div>
        </SectionRow>
        <SectionRow>
          <div className="flex flex-col justify-center space-y-2">
            <div className="my-4">Otras observaciones</div>
            <div className="shadow-md ring-1 ring-gray-400 p-2 rounded-lg">
              {state.observations}
            </div>
          </div>
        </SectionRow>
      </Section>

      <div className="flex justify-start">
        <Button variant="primary" size="large">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

/*
We could have gone further with abstractions and collected the data for display into a separate structure,
 which we'd then iterate over and render. However, going that much DRY with the code could prove problematic when we get new requirements, 
 to which the code is not robust enough to adapt. One important rule to keep in mind is that it's way easier to DRY the code than to un-DRY it.

When using TypeScript with React Hook Form, it's important to properly type the form events and data. This is especially important when the form data is passed between the steps.
*/
