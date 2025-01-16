import * as yup from "yup";

export const vpnValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut: yup
    .string()
    .required("RUT Requerido")
    .matches(/^[0-9.-]+$/i, "RUT Invalido")
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres"),

  department: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras"),
  cargo: yup.string().required("Campo requerido"),

  phone: yup
    .string()
    .required("Anexo requerido")
    .matches(/^[0-9]+$/i, "Solo numeros")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres"),

  email: yup
    .string()
    .email("Correo Invalido")
    .required("Correo Requerido")
    .test("domain-check", "Email debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
  fullname_2: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut_2: yup
    .string()
    // .matches(/^[0-9.-]+$/i, "RUT Invalido")
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres")
    .required("RUT Requerido"),

  department_2: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras"),
  cargo_2: yup.string().required("Campo requerido"),

  phone_2: yup
    .string()
    .matches(/^[0-9]+$/i, "Solo numeros")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres")
    .required("Anexo requerido"),

  email_2: yup
    .string()
    .email("Correo Invalido")
    .required("Correo Requerido")
    .test("domain-check", "Email debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
  fullname_3: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut_3: yup
    .string()
    // .matches(/^[0-9.-]+$/i, "RUT Invalido")
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres")
    .required("RUT Requerido"),

  department_3: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras"),
  cargo_3: yup.string().required("Campo requerido"),

  phone_3: yup
    .string()
    .matches(/^[0-9]+$/i, "Solo numeros")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres")
    .required("Anexo requerido"),

  email_3: yup
    .string()
    .email("Correo Invalido")
    .required("Correo Requerido")
    .test("domain-check", "Email debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
});
