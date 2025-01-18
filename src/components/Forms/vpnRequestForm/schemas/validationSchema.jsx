import * as yup from "yup";

export const vpnValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras son permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut: yup
    .string()
    .required("Campo requerido")
    .matches(
      /^[0-9.-]+$/i,
      "RUT Invalido, ingresar con puntos y digito verificador"
    )
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres"),

  department: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras son permitidas"),
  cargo: yup.string().required("Campo requerido"),

  phone: yup
    .string()
    .required("Campo requerido")
    .matches(/^[0-9]+$/i, "Solo numeros son permitidos")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres"),

  email: yup
    .string()
    .email("Correo Invalido")
    .required("Campo Requerido")
    .test("domain-check", "El correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
  fullname_2: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras son permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut_2: yup
    .string()
    .matches(
      /^[0-9.-]+$/i,
      "RUT Invalido, ingresar con puntos y digito verificador"
    )
    .min(6, "Minimo 6 caracteres")
    .max(12, "Maximo 12 caracteres")
    .required("RUT Requerido"),

  department_2: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras son permitidas"),
  cargo_2: yup.string().required("Campo requerido"),

  phone_2: yup
    .string()
    .matches(/^[0-9]+$/i, "Solo numeros son permitidos")
    .min(6, "Minimo 6 caracteres")
    .max(6, "Maximo 6 caracteres")
    .required("Anexo requerido"),

  email_2: yup
    .string()
    .email("Correo Invalido")
    .required("Correo Requerido")
    .test("domain-check", "El correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
  fullname_3: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo Letras son permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut_3: yup
    .string()
    .matches(
      /^[0-9.-]+$/i,
      "RUT Invalido, ingresar con puntos y digito verificador"
    )
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
    .test("domain-check", "El correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),

  ipAddress: yup
    .string()
    .matches(/^[0-9.]+$/i, "Solo numeros son permitidos")
    .required("Direccion IP requerida")
    .min(9, "Minimo 9 caracteres")
    .max(12, "Maximo 12 caracteres incluyendo puntos"),

  ports: yup
    .string()
    .required("Correo Requerido")
    .matches(/^[0-9]+$/i, "Solo numeros son permitidos"),

  justif: yup.string().required("Campo Requerido"),

  observations: yup.string(),
});
