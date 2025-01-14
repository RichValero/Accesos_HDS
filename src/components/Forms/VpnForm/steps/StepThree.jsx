import { FormInput } from "../components/FormInput";

export const StepThree = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del Solicitante
    </h2>
    <FormInput label="Nombre Completo" name="fullname_3" />
    <FormInput label="R.U.T." name="rut_3" />
    <FormInput label="Servicio o Departamento" name="department_3" />
    <FormInput label="Cargo" name="cargo_3" />
    <FormInput label="Anexo" name="phone_3" />
    <FormInput label="Correo" name="email_3" />
  </div>
);
