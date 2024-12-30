import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export const About = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/asset");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className="w-1/4">
        <legend className="mb-4 font-poppins font-semibold">
          Responsable de Autorizacion
        </legend>
        <Field label="Nombre y Apellido">
          <Input
            {...register("name3", { required: "Campo requerido" })}
            id="name3"
            placeholder="Nombre y Apellido"
          />
        </Field>
        <Field label="R.U.T.">
          <Input {...register("rut2")} id="rut2" placeholder="12.345.678-9" />
        </Field>
        <Field label="Servicio o Departamento">
          <Input
            {...register("department2")}
            id="department2"
            placeholder="Servicio"
          />
        </Field>
        <Field label="Anexo">
          <Input
            {...register("phone3")}
            id="phone3"
            placeholder="+56 9 1234 5678"
          />
        </Field>
        <Field label="Cargo">
          <Input {...register("cargo3")} id="cargo3" placeholder="Cargo" />
        </Field>
        <Field label="Correo">
          <Input
            {...register("email3")}
            id="email"
            placeholder="correo@hsalvador.cl"
          />
        </Field>
        <div className="flex justify-between w-full gap-2 mt-5">
          <Link to="/education">
            <Button variant="primary" size="medium">
              <ArrowLeftToLine size={20} />
              Regresar
            </Button>
          </Link>
          <Button variant="primary" size="medium">
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
