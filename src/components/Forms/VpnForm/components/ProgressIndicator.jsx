export const ProgressIndicator = ({ currentStep, totalSteps }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
        return (
          <div
            key={step}
            className={`flex items-center ${
              step < currentStep
                ? "text-blue-600"
                : step === currentStep
                ? "text-blue-600"
                : "text-gray-400"
            }`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                step <= currentStep ? "border-blue-600" : "border-gray-300"
              } flex items-center justify-center`}
            >
              {step < currentStep ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <span
                  className={
                    step === currentStep ? "text-blue-600" : "text-gray-300"
                  }
                >
                  {step}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
