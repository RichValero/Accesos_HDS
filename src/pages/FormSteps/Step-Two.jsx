import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import ProgressBar from "./ProgressBar";

export const StepTwo = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/stepthree");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <ProgressBar />
      <fieldset>
        <legend className="mb-4 font-poppins font-semibold">
          Datos del Usuario de la VPN
        </legend>
        <Field label="Nombre y Apellido" error={errors?.name2}>
          <Input
            {...register("name2", {
              required: "Campo Requerido",
              minLength: { value: 6, messsage: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: /^[A-Za-z_ ]+$/i,
            })}
            type="text"
            id="name2"
            placeholder="Pepito Perez"
          />
        </Field>
        <Field label="R.U.T" error={errors?.rut}>
          <Input
            {...register("rut", {
              required: "Campo Requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 12, message: "Maximo 9 caracteres" },
              pattern: /^[0-9.-]+$/i,
            })}
            type="text"
            id="rut"
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Empresa o Establecimiento" error={errors?.empresa}>
          <Input
            {...register("empresa", {
              required: "Campo Requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: /^[A-Za-z_ ]+$/i,
            })}
            type="text"
            id="empresa"
            placeholder="Biomedica"
          />
        </Field>
        <Field label="Anexo" error={errors?.phone2}>
          <Input
            {...register("phone2", {
              required: "Campo Requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 6, message: "Maximo 6 caracteres" },
              pattern: /^[0-9.-]+$/i,
            })}
            type="text"
            id="phone2"
            placeholder="123456"
          />
        </Field>
        <Field label="Cargo" error={errors?.cargo2}>
          <Input
            {...register("cargo2", {
              required: "Campo Requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: /^[A-Za-z_ ]+$/i,
            })}
            type="text"
            id="cargo2"
            placeholder="EU / TENS / Coordinador"
          />
        </Field>
        <Field label="Correo" error={errors?.email2}>
          <Input
            {...register("email2", { required: "Campo Requerido" })}
            type="email"
            id="email2"
            placeholder="correo@hsalvador.cl"
          />
        </Field>
        <div className="flex justify-between w-full gap-2 mt-5">
          <Link to="/stepone">
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
