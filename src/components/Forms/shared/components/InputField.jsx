import React from "react";

export const InputField = ({
  label,
  title,
  name,
  register,
  error,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col pb-3 font-medium">
      <label htmlFor={name} className="pb-2">
        {title}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        {...props}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
