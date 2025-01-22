import { FormProvider } from "./components/FormContext";
import {
  useFormContext,
  ProgressIndicator,
  NavigationButton,
  useFormSubmission,
  formConfig,
  FormLayout,
} from "@/components/Forms";

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

export const VpnRequestForm = () => {
  return (
    <FormProvider>
      <FormLayout>
        <FormContent />
      </FormLayout>
    </FormProvider>
  );
};
