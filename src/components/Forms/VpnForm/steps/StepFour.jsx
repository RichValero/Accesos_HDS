import { FormInput } from "../components/FormInput";

export const StepFour = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del activo de Informacion
    </h2>
    <FormInput
      label="Direccion IP"
      name="ipaddress"
      placeholder="Pepito Perez"
    />
    <FormInput
      label="Puertos o Protocolos"
      name="ports"
      placeholder="Ingresar puertos o protocolos"
    />
    <texarea
      label="Observaciones"
      name="observations"
      placeholder="Ingresar observaciones"
      className="p-2 h-40 w-full border rounded-md resize-none"
    />
    <FormInput
      label="Cargo"
      name="cargo"
      placeholder="EU / TENS / COORDINADOR(A)"
    />
  </div>
);
