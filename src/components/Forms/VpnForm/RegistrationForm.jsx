import { FormProvider } from "./components/FormContext";
import { useFormContext } from "./components/FormContext";
import { useFormSubmission } from "../hooks/useFormSubmission";
import { formConfig } from "./constants/FormConfig";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { NavigationButton } from "./components/NavButton";

const FormContent = () => {
  const {
    currentStep,
    formMethods: {
      formState: { errors },
    },
  } = useFormContext();
  const { submitForm } = useFormSubmission();

  const StepComponent = formConfig.steps[currentStep].component;

  return (
    <form onSubmit={submitForm}>
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={formConfig.totalSteps}
      />
      <StepComponent />
      <NavigationButton />
    </form>
  );
};

export const RegistrationForm = () => {
  return (
    <FormProvider>
      <div className="min-h-screen py-10">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 ring-1 ring-slate-200">
            <FormContent />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
