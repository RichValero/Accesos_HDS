import * as yup from "yup";

export const EmailRequestSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  last_name: yup
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

  phone: yup
    .string()
    .required("Campo requerido")
    .matches(/^[0-9]+$/i, "Solo numeros")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres"),
});
