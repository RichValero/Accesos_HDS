import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export const About = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/asset");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend className="mb-4 font-poppins font-semibold">
          Responsable de Autorizacion
        </legend>
        <Field label="Nombre y Apellido" error={errors?.name3}>
          <Input
            {...register("name3", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: /^[A-Za-z_ ]+$/i,
            })}
            type="text"
            id="name3"
            placeholder="Nombre y Apellido"
          />
        </Field>
        <Field label="R.U.T." error={errors?.rut2}>
          <Input
            {...register("rut2", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 12, message: "Maximo 9 caracteres" },
              pattern: /^[0-9.-]+$/,
            })}
            type="text"
            id="rut2"
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Servicio o Departamento" error={errors?.department2}>
          <Input
            {...register("department2", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: /^[A-Za-z_ ]+$/i,
            })}
            type="text"
            id="department2"
            placeholder="Servicio"
          />
        </Field>
        <Field label="Anexo" error={errors?.phone3}>
          <Input
            {...register("phone3", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 6, message: "Maximo 6 caracteres" },
              pattern: /^[0-9.-]+$/,
            })}
            type="text"
            id="phone3"
            placeholder="123456"
          />
        </Field>
        <Field label="Cargo" error={errors?.cargo3}>
          <Input
            {...register("cargo3", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
            })}
            id="cargo3"
            placeholder="Cargo"
          />
        </Field>
        <Field label="Correo" error={errors?.email3}>
          <Input
            {...register("email3", { required: "Campo requerido" })}
            id="email"
            placeholder="correo@hsalvador.cl"
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

//React Hook Form internally handles the form state,
//  so all we need to do is save it to our app state after it's been validated.

//The final step, Confirm, is slightly different since we need to display the data entered by the user.
//  We'll add a couple of section components, which we then compose to build the data presentation.
