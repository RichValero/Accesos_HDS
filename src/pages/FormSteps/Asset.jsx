import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export const Asset = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className="w-1/4">
        <legend className="mb-4 font-poppins font-semibold">
          Datos del Activo de Información
        </legend>
        <Field label="Direccion IP">
          <Input
            {...register("ipv4", { required: "Campo requerido" })}
            id="ipv4"
            placeholder="10.6.198.1"
          />
        </Field>
        <Field label="Puertos y Protocolos que necesita">
          <Input
            {...register("protocol")}
            id="protocol"
            placeholder="SAM - GESDOC - TRAKCARE"
          />
        </Field>
        <Field label="Fecha de solicitud">
          <Input
            {...register("date-request")}
            id="daterequest"
            placeholder="01/01/2025"
          />
        </Field>
        <Field label="Justificacion de la solicitud de VPN">
          <textarea
            {...register("vpnjustification")}
            id="vpnjustification"
            placeholder="Justificación de las necesidades de conectividad desde el exterior"
            className="p-2 h-20 w-full border rounded-md"
          />
        </Field>
        <Field label="Otras observaciones">
          <textarea
            {...register("observations")}
            id="observations"
            placeholder="Observaciones adicionales"
            className="p-2 h-20 w-full border rounded-md"
          />
        </Field>

        <div className="flex justify-between w-full gap-2 mt-5">
          <Link to="/education">
            <Button variant="primary" size="large">
              <ArrowLeftToLine size={20} />
              Regresar
            </Button>
          </Link>
          <Button variant="primary" size="large">
            Siguiente <ArrowRightToLine size={20} />
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};
