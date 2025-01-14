import { FormInput } from "../components/FormInput";

export const StepOne = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del Solicitante
    </h2>
    <FormInput label="Nombre Completo" name="fullname" />
    <FormInput label="R.U.T." name="rut" />
    <FormInput label="Servicio o Departamento" name="department" />
    <FormInput label="Cargo" name="cargo" />
    <FormInput label="Anexo" name="phone" />
    <FormInput label="Correo" name="email" />
  </div>
);
