// import { useForm } from "react-hook-form";
// import { useNavigate, Link } from "react-router-dom";
// import { useAppState } from "../../hooks/state";
// import { Button, Field, Form, Input } from "../../components/Forms";
// import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
// import ProgressBar from "./ProgressBar";

// export const StepTwo = () => {
//   const [state, setState] = useAppState();
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm({ defaultValues: state });
//   const navigate = useNavigate();

//   const saveData = (data) => {
//     setState({ ...state, ...data });
//     navigate("/stepthree");
//   };

//   return (
//     <Form onSubmit={handleSubmit(saveData)}>
//       <fieldset>
//         <legend className="mb-4 font-poppins font-semibold text-center text-xl">
//           Datos del Usuario de la VPN
//         </legend>
//         <Field label="Nombre y Apellido" error={errors?.fullname_2}>
//           <Input
//             {...register("fullname_2", {
//               required: "Campo Requerido",
//               minLength: { value: 6, messsage: "Minimo 6 caracteres" },
//               maxLength: { value: 50, message: "Maximo 50 caracteres" },
//               pattern: /^[A-Za-z_ ]+$/i,
//             })}
//             type="text"
//             id="fullname_2"
//             placeholder="Pepito Perez"
//           />
//         </Field>
//         <Field label="R.U.T" error={errors?.rut_2}>
//           <Input
//             {...register("rut_2", {
//               required: "Campo Requerido",
//               minLength: { value: 6, message: "Minimo 6 caracteres" },
//               maxLength: { value: 12, message: "Maximo 9 caracteres" },
//               pattern: /^[0-9.-]+$/i,
//             })}
//             type="text"
//             id="rut_2"
//             placeholder="12.345.678-9"
//           />
//         </Field>
//         <Field label="Empresa o Establecimiento" error={errors?.department_2}>
//           <Input
//             {...register("department_2", {
//               required: "Campo Requerido",
//               minLength: { value: 6, message: "Minimo 6 caracteres" },
//               maxLength: { value: 50, message: "Maximo 50 caracteres" },
//               pattern: /^[A-Za-z_ ]+$/i,
//             })}
//             type="text"
//             id="department_2"
//             placeholder="Biomedica"
//           />
//         </Field>
//         <Field label="Anexo" error={errors?.phone_2}>
//           <Input
//             {...register("phone_2", {
//               required: "Campo Requerido",
//               minLength: { value: 6, message: "Minimo 6 caracteres" },
//               maxLength: { value: 6, message: "Maximo 6 caracteres" },
//               pattern: /^[0-9.-]+$/i,
//             })}
//             type="text"
//             id="phone_2"
//             placeholder="123456"
//           />
//         </Field>
//         <Field label="Cargo" error={errors?.cargo_2}>
//           <Input
//             {...register("cargo_2", {
//               required: "Campo Requerido",
//               minLength: { value: 6, message: "Minimo 6 caracteres" },
//               maxLength: { value: 50, message: "Maximo 50 caracteres" },
//               pattern: /^[A-Za-z_ ]+$/i,
//             })}
//             type="text"
//             id="cargo_2"
//             placeholder="EU / TENS / Coordinador"
//           />
//         </Field>
//         <Field label="Correo" error={errors?.email_2}>
//           <Input
//             {...register("email_2", { required: "Campo Requerido" })}
//             type="email"
//             id="email_2"
//             placeholder="correo@hsalvador.cl"
//           />
//         </Field>
//         <div className="flex justify-between w-full gap-2 mt-5">
//           <Link to="/steptwo">
//             <Button variant="primary" size="large">
//               <ArrowLeftToLine size={20} />
//               Regresar
//             </Button>
//           </Link>
//           <Button variant="primary" size="large">
//             Siguiente <ArrowRightToLine size={20} />
//           </Button>
//         </div>
//       </fieldset>
//     </Form>
//   );
// };
