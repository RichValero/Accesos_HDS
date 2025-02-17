import { FormInput } from "@/components/forms";

export const StepTwo = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del usuario VPN
    </h2>
    <FormInput label="Nombre Completo" name="fullname_2" />
    <FormInput label="R.U.T" name="rut_2" />
    <FormInput label="Servicio o Departamento" name="department_2" />
    <FormInput label="Cargo" name="cargo_2" />
    <FormInput label="Anexo" name="phone_2" />
    <FormInput label="Correo" name="email_2" />
  </div>
);
