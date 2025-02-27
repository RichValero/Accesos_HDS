import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo valido")
    .required("Correo Requerido")
    .test("domain-check", "Correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),

  password: yup
    .string()
    .min(6, "Contraseña debe tener minimo 6 caracteres")
    .required("Contraseña Requerida"),
});
