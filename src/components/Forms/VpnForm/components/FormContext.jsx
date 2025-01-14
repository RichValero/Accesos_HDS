import react, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vpnValidationSchema } from "../constants/validationSchema";
import { formConfig } from "../constants/FormConfig";

const FormContext = createContext(null); //REMEMBER TO LOOK WHAT THIS DOES AND ADDED HERE

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formMethods = useForm({
    resolver: yupResolver(vpnValidationSchema),
    mode: "onChange",
  });

  const value = {
    currentStep,
    setCurrentStep,
    isSubmitting,
    setIsSubmitting,
    formMethods,
    totalSteps: formConfig.totalSteps, //TO DO: REMEMBER TO DO THIS COMPONENT AND SEARCH IN DETAIL WHAT IT DOES
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext); //REMEMBER TO ALSO LOOK FOR THIS IN DETAIL AND STUDY EVERYTHING SO YOU UNDERSTAND!
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

//THIS COMPONENT ENDS HERE, NOW ITS TIME TO CREATE USENAVIGATION CUSTOM HOOK
