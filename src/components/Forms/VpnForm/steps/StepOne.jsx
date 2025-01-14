import { FormInput } from "../components/FormInput";

export const StepOne = ({ register, errors }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">
      Datos del Solicitante
    </h2>
    <FormInput
      label="Nombre Completo"
      name="fullname"
      error={errors.fullname}
      register={register}
    />
    <FormInput
      label="R.U.T."
      name="rut"
      error={errors.rut}
      register={register}
    />
    <FormInput
      label="Servicio o Departamento"
      name="department"
      error={errors.department}
      register={register}
    />
    <FormInput
      label="Cargo"
      name="cargo"
      error={errors.cargo}
      register={register}
    />
    <FormInput
      label="Anexo"
      name="rut"
      error={errors.phone}
      register={register}
    />
    <FormInput
      label="Correo"
      name="email"
      error={errors.email}
      register={register}
    />
  </div>
);
