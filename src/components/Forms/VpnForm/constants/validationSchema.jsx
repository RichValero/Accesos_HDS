import * as yup from "yup";

export const vpnValidationSchema = {
  fullname: yup.string().required("Campo requerido"),

  rut: yup
    .string()
    .matches(/^[0-9.-]+$/i, "RUT Invalido")
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres")
    .required("RUT Requerido"),

  department: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras"),
  cargo: yup.string().required("Campo requerido"),

  phone: yup
    .string()
    .matches(/^[0-9]+$/i, "Solo numeros")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres")
    .required("Anexo requerido"),

  email: yup
    .string()
    .email("Correo Invalido")
    .required("Correo Requerido")
    .test("domain-check", "Email debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
};
