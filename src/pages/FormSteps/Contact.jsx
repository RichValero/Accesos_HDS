import React from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../hooks/state";
import { Button, Field, Form, Input } from "../../components/Forms";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
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
    navigate("/education");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className="w-1/4">
        <legend className="mb-4 font-poppins font-semibold">
          Datos del solicitante
        </legend>
        <Field label="Nombre y Apellido" error={errors?.name}>
          <Input
            {...register("name", { required: "Campo requerido" })}
            id="name"
            placeholder="Pepito Perez"
          />
        </Field>
        <Field label="R.U.T" error={errors?.identification}>
          <Input
            {...register("identification", { required: "Campo requerido" })}
            id="identification"
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Servicio o Departamento" error={errors?.department}>
          <Input
            {...register("department", { required: "Campo requerido" })}
            id="department"
            placeholder="Servicio o Departamento"
          />
        </Field>
        <Field label="Cargo" error={errors?.cargo}>
          <Input
            {...register("cargo", { required: "Campo requerido" })}
            id="cargo"
            autoComplete="off"
            placeholder="EU / TENS / COORDINADOR"
          />
        </Field>
        <Field label="Anexo" error={errors?.phone}>
          <Input
            {...register("phone", {
              required: "Numero de Telefono requerido",
            })}
            id="phone"
            autoComplete="off"
            placeholder="+56 9 1234 5678"
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
        <div className="mt-5">
          <Button variant="primary" size="medium">
            Siguiente {">"}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};
