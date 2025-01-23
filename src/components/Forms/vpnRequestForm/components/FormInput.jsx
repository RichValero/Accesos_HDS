import { useFormContext } from "@/components/forms";

export const FormInput = ({ label, name, type = "text", placeholder }) => {
  const {
    formMethods: {
      register,
      formState: { errors },
    },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        id={name}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

//REMEMBER TO LOOK WHAT FORWARDREF AND USEIMPERATIVEHANDLE DO
//REMEMBER TO LOOK WHAT ALL OF THIS DOES AND ADD COMMENTS TO EXPLAIN TO YOURSELF.

//THIS IS THE END, YOU ALREADY DID 2 CUSTOM HOOKS (USEFORMSUBMISSION AND USEFORMNAVIGATION) AND A NAVIGATION BUTTON BUT YOU HAVE TO CREATE THE FORM COMPONENT
