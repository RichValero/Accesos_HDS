import * as yup from "yup";

export const EmailRequestSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  lastname: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  department: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  role: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),
});
