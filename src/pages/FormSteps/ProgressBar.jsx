import React from "react";
import { useLocation } from "react-router-dom";

const ProgressBar = () => {
  const location = useLocation();
  const steps = [
    { path: "/stepone", label: "Datos del Solicitante" },
    { path: "/steptwo", label: "Datos del Usuario del VPN" },
    { path: "/stepthree", label: "Responsable de Autorizacion" },
    { path: "/stepfour", label: "Responsable de Autorizacion" },
    { path: "/confirm", label: "Confirmar Datos" },
  ];

  const getLinkClass = (path) => {
    return (
      "inline-flex items-center px-2 py-2 text-sm font-medium " +
      (path === location.pathname
        ? "bg-sky-600 text-white"
        : "text-gray-700 bg-white hover:bg-gray-50")
    );
  };

  const getProgressWidth = () => {
    const currentIndex = steps.findIndex(
      (step) => step.path === location.pathname
    );
    return ((currentIndex + 1) / steps.length) * 100;
  };

  return (
    <nav className="flex flex-col items-center w-full mb-5">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-xl h-2 overflow-hidden">
        <div
          className="bg-sky-500 rounded-xl h-full transition-all duration-300"
          style={{
            width: `${getProgressWidth()}%`,
          }}
        />
      </div>

      {/* Step Navigation */}
      <ol className="flex items-center text-center w-full mt-2 border border-gray-300">
        {steps.map((step, index) => (
          <li key={index} className="border-r">
            <span className={getLinkClass(step.path)}>{step.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressBar;
