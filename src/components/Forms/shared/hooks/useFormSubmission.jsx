import { useCallback } from "react";
import { useFormContext } from "@/components/forms";

//THIS IS PLACEHOLDER, YOU HAVE TO ADD THE API ENDPOINT CALL
export const useFormSubmission = () => {
  const { formMethods, setIsSubmitting } = useFormContext();
  const { handleSubmit } = formMethods;

  const onSubmit = useCallback(async () => {
    try {
      setIsSubmitting(true);
      //HERE YOU WOULD TIPICALLY MAKE AN API CALL
      console.log("Form submitted successfully", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate api call
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [setIsSubmitting]);

  return {
    submitForm: handleSubmit(onSubmit),
  };
};

//REMEMBER TO LOOK WHAT THIS DOES AND ADD COMMENTS
//NEXT STEP NAVIGATIONBUTTON
