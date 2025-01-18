import React from "react";
import { useFormContext } from "./FormContext";
import { useFormNavigation } from "@/components/forms";

//REMEMBER TO ADD VARIANTS FOR BUTTON CUSTOMIZATION AND LOOK WHAT ALL OF THIS DOES AND HOW ITS CONNECTED TO THE OTHER COMPONENTS
export const NavigationButton = () => {
  const { isSubmitting } = useFormContext();
  const {
    handleNextStep,
    handlePrevStep,
    canGoBack,
    canGoForward,
    isLastStep,
  } = useFormNavigation();

  return (
    <div className="mt-8 flex justify-between">
      {canGoBack && (
        <button
          type="button"
          onClick={handlePrevStep}
          disabled={isSubmitting}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-5 disabled:opacity-50 "
        >
          Regresar
        </button>
      )}

      {canGoForward ? (
        <button
          type="button"
          onClick={handleNextStep}
          disabled={isSubmitting}
          className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Siguiente
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Enviado"}
        </button>
      )}
    </div>
  );
};

//AFTER THIS YOU WHENT TO FORMINPUT
