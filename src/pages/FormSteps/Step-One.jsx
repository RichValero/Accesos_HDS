import React from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { useNavigate } from "react-router-dom";
import { ArrowRightToLine } from "lucide-react";

export const StepOne = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  // const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/steptwo");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <legend className="mb-4 font-poppins font-semibold text-center text-xl">
        Datos del solicitante
      </legend>
      <fieldset>
        <Field label="Nombre y Apellido" error={errors?.fullname}>
          <Input
            {...register("fullname", {
              required: "Campo requerido",
              minLength: { value: 10, message: "Minimo 15 caracteres" },
              maxLength: { value: 50, message: "Maximo 50 caracteres" },
              pattern: {
                value: /^[A-Za-z_ ]+$/i,
                message: "Solo letras validas",
              },
            })}
            type="text"
            id="fullname"
            placeholder="Pepito Perez"
          />
        </Field>
        <Field label="R.U.T" error={errors?.rut}>
          <Input
            {...register("rut", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 12, message: "Maximo 9 caracteres" },
              pattern: {
                value: /^[0-9.-]+$/i,
                message: "Solo numeros validos",
              },
            })}
            type="text"
            id="rut"
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Servicio o Departamento" error={errors?.department}>
          <Input
            {...register("department", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 20 caracteres" },
              pattern: {
                value: /^[A-Za-z_ ]+$/i,
                message: "Solo letras validas",
              },
            })}
            type="text"
            id="department"
            placeholder="Servicio o Departamento"
          />
        </Field>
        <Field label="Cargo" error={errors?.cargo}>
          <Input
            {...register("cargo", {
              required: "Campo requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 50, message: "Maximo 20 caracteres" },
              pattern: {
                value: /^[A-Za-z_ ]+$/i,
                message: "Solo letras validas",
              },
            })}
            type="text"
            id="cargo"
            autoComplete="off"
            placeholder="EU / TENS / COORDINADOR(A)"
          />
        </Field>
        <Field label="Anexo" error={errors?.phone}>
          <Input
            {...register("phone", {
              required: "Numero de Telefono requerido",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
              maxLength: { value: 6, message: "Maximo 6 caracteres" },
              pattern: {
                value: /^[0-9.-]+$/i,
                message: "Solo numeros validos",
              },
            })}
            type="text"
            id="phone"
            autoComplete="off"
            placeholder="123456"
          />
        </Field>
        <Field label="Correo" error={errors?.email}>
          <Input
            {...register("email", {
              required: "Campo requerido",
            })}
            type="email"
            id="email"
            autoComplete="off"
            placeholder="correo@hsalvador.cl"
          />
        </Field>
        <Button variant="primary" size="large">
          Siguiente <ArrowRightToLine size={20} />
        </Button>
      </fieldset>
    </Form>
  );
};
