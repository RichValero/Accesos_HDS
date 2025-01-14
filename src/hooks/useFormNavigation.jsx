import { useCallback } from "react"; //remember to look what this does
import { useFormContext } from "../components/Forms/Form";
// import {formConfig} from "" REMEMBER TO DO THIS

//REMEMBER TO SEARCH WHAT ALL OF THIS DOES AND ADD COMMENTS TO EXPLAIN TO YOURSELF.
export const useFormNavigation = () => {
  const { currentStep, setCurrentStep, formMethods } = useFormContext();
  const { trigger } = formMethods;

  const handleNextStep = useCallback(async () => {
    const fieldsToValidate = formConfig.steps[currentStep].fields;

    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, formConfig.totalSteps));
      return true;
    }
    return false;
  }, [currentStep, trigger, setCurrentStep]);

  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, [setCurrentStep]);

  return {
    handleNextStep,
    handlePrevStep,
    canGoBack: currentStep > 1,
    canGoForward: currentStep < formConfig.totalSteps,
    isLastStep: currentStep === formConfig.totalSteps,
  };
};

//AFTER THIS YOU DID USEFORMSUBMISSION CUSTOM HOOK, REMEMBER TO ALSO LOOK WHAT IT DOES
