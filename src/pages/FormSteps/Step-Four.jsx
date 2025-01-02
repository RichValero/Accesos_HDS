import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import ProgressBar from "./ProgressBar";

export const StepFour = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <ProgressBar />
      <fieldset>
        <legend className="mb-4 font-poppins font-semibold">
          Datos del Activo de Información
        </legend>
        <Field label="Direccion IP" error={errors?.ipv4}>
          <Input
            {...register("ipv4", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 13, message: "Maximo 10 caracteres" },
              pattern: {
                value: /^[0-9.-]+$/i,
                message: "Solo numeros validos",
              },
            })}
            type="text"
            id="ipv4"
            placeholder="10.6.198.1"
          />
        </Field>
        <Field
          label="Puertos y Protocolos que necesita"
          error={errors?.protocol}
        >
          <Input
            {...register("protocol", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 20, message: "Maximo 20 caracteres" },
            })}
            type="text"
            id="protocol"
            placeholder="SAM - GESDOC - TRAKCARE"
          />
        </Field>
        <Field label="Fecha de solicitud" error={errors?.dateRequest}>
          <Input
            {...register("dateRequest", {
              required: "Campo requerido",
              minLength: { value: 8, message: "Minimo 8 caracteres" },
              maxLength: { value: 8, message: "Maximo 8 caracteres" },
              pattern: {
                value: /^[0-9.-]+$/i,
                message: "Solo numeros validos",
              },
            })}
            type="text"
            id="dateRequest"
            placeholder="01/01/2025"
          />
        </Field>
        <Field
          label="Justificacion de la solicitud de VPN"
          error={errors?.vpnjustification}
        >
          <textarea
            {...register("vpnjustification", { required: "Campo requerido" })}
            id="vpnjustification"
            placeholder="Justificación de las necesidades de conectividad desde el exterior"
            className="p-2 h-40 w-full border rounded-md resize-none"
          />
        </Field>
        <Field label="Observaciones">
          <textarea
            {...register("observations")}
            id="observations"
            placeholder="Observaciones adicionales"
            className="p-2 h-40 w-full border rounded-md resize-none"
          />
        </Field>

        <div className="flex justify-between w-full gap-2 mt-5">
          <Link to="/stepthree">
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
