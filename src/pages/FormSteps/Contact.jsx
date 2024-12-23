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
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/education");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First Name" error={errors?.firstName}>
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="first-name"
          />
        </Field>
        <Field label="Last Name" error={errors?.lastName}>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            id="last-name"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Password" error={errors?.password}>
          <Input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
            autoComplete="off"
          />
        </Field>
        <Field label="Confirm Password" error={errors?.confirmPassword}>
          <Input
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => {
                value === watchPassword || "The passwords do not match";
              }, //CHECKING IF PASSWORDS MATCH
            })}
            type="password"
            id="confirm-password"
            autoComplete="off"
          />
        </Field>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};
