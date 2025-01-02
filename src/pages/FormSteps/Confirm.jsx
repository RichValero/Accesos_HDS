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

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    //SUBMIT DATA TO DATABASE
  };

  // SHOWING THE DATA THAT WAS ENTERED BY THE USER FOR IT TO BE CONFIRMED
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <ProgressBar />
      <h1 className="mb-5 flex justify-center items-center text-2xl text-bold font-poppins text-primary">
        Verificacion de Datos
      </h1>
      <Section title="Personal Information" url="/stepone">
        <SectionRow>
          <div>Nombre y Apellido: </div>
          <div>{state.name}</div>
        </SectionRow>

        <SectionRow>
          <div>R.U.T: </div>
          <div>{state.identification}</div>
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
          <div>{state.name2}</div>
        </SectionRow>

        <SectionRow>
          <div>R.U.T.</div>
          <div>{state.rut}</div>
        </SectionRow>

        <SectionRow>
          <div>Empresa o Establecimiento</div>
          <div>{state.empresa}</div>
        </SectionRow>

        <SectionRow>
          <div>Anexo</div>
          <div>{state.phone2}</div>
        </SectionRow>

        <SectionRow>
          <div>Cargo</div>
          <div>{state.cargo2}</div>
        </SectionRow>

        <SectionRow>
          <div>Correo</div>
          <div>{state.email2}</div>
        </SectionRow>
      </Section>
      <div className="bg-slate-400 rounded-xl h-0.5 w-full mb-5" />
      {/* VPN INFORMATION END */}

      {/* RESPONSABLE INFORMATION START */}

      <Section title="Responsable de Autorizacion" url="/stepthree">
        <SectionRow>
          <div>Nombre y Apellido</div>
          <div>{state.name3}</div>
        </SectionRow>
        <SectionRow>
          <div>R.U.T.</div>
          <div>{state.rut2}</div>
        </SectionRow>
        <SectionRow>
          <div>Servicio o Departamento</div>
          <div>{state.department2}</div>
        </SectionRow>
        <SectionRow>
          <div>Anexo</div>
          <div>{state.phone3}</div>
        </SectionRow>
        <SectionRow>
          <div>Cargo</div>
          <div>{state.cargo3}</div>
        </SectionRow>
        <SectionRow>
          <div>Correo</div>
          <div>{state.email3}</div>
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
          <div>{state.protocol}</div>
        </SectionRow>
        <SectionRow>
          <div className=" rounded-md w-full">
            <div>Fecha de solicitud:</div>
            <div>{state.daterequest}</div>
          </div>
        </SectionRow>
        <SectionRow>
          <div className="flex flex-col justify-center space-y-2">
            <div className="mb-4">Justificacion de la solicitud de VPN</div>
            <div className="shadow-md ring-1 ring-gray-400 p-2 rounded-lg">
              {state.vpnjustification}
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
