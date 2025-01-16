import * as yup from "yup";

export const userRegistrationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo letras permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  rut: yup
    .string()
    .required("Campo requerido")
    .matches(/^[0-9.-]+$/i, "Solo se permiten numeros, puntos y guion")
    .min(6, "Minimo 6 caracteres sin punto ni guion")
    .max(12, "Maximo 12 caracteres, se incluyen puntos y guion"),

  role: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo letras son permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  email: yup
    .string()
    .required("Campo requerido")
    .email("Ingresar correo valido")
    .test("domain-check", "Correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
});
