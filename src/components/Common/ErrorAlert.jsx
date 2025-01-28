import { X } from "lucide-react";

export const ErrorAlert = ({ message, onClose }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <span className="block sm:inline">
        <p className="font-semibold text-center">{message}</p>
      </span>
      <span
        onClick={onClose}
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
      >
        <X stroke={2} size={20} color="#8a0a0a" />
      </span>
    </div>
  );
};
