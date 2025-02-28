import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Correo Invalido, ingresar correo institucional")
    .required("Correo Requerido")
    .test("domain-check", "El correo debe ser institucional", (value) => {
      return value ? value.endsWith("@hsalvador.cl") : false;
    }),
  password: yup
    .string()
    .min(6, "Minimo 6 caracteres")
    .required("Contraseña Requerida"),
});
