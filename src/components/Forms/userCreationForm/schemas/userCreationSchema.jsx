import * as yup from "yup";

export const UserCreationSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo letras son permitidas")
    .max(50, "Maximo 50 caracteres"),

  last_name: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo letras son permitidas")
    .min(6, "Minimo 6 caracteres")
    .max(50, "Maximo 50 caracteres"),

  department: yup
    .string()
    .required("Campo requerido")
    .matches(/^[A-Za-z_ ]+$/i, "Solo letras son permitidas")
    .min(6, "Minimo 6 caracteres sin punto ni guion")
    .max(50, "Maximo 50 caracteres"),

  email: yup
    .string()
    .required("Campo requerido")
    .email("Ingresar correo valido")
    .test("domain-check", "Correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),

  password: yup
    .string()
    .required("Campo requerido")
    .min(6, "Minimo 6 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula"),

  role: yup
    .string()
    .required("Campo requerido")
    .oneOf(["admin", "user"], "Seleccione un rol"),
});
