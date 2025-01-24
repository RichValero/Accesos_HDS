import React from "react";

export const InputField = ({
  label,
  name,
  register,
  errors,
  type = "text",
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col pb-3 font-medium">
      <label htmlFor={name} className="pb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500  ${
          errors[name] ? "border-red-500" : "ring-gray-300"
        }`}
        {...rest}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};
