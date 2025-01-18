import { FormInput } from "@/components/forms";

export const StepOne = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del Solicitante
    </h2>
    <FormInput
      label="Nombre Completo"
      name="fullname"
      placeholder="Pepito Perez"
    />
    <FormInput label="R.U.T." name="rut" placeholder="12.345.678-9" />
    <FormInput
      label="Servicio o Departamento"
      name="department"
      placeholder="Departamento de Informatica"
    />
    <FormInput
      label="Cargo"
      name="cargo"
      placeholder="EU / TENS / COORDINADOR(A)"
    />
    <FormInput label="Anexo" name="phone" placeholder="123456" />
    <FormInput label="Correo" name="email" placeholder="correo@hsalvador.cl" />
  </div>
);
