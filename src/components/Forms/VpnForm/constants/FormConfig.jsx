import { StepOne } from "../steps/StepOne";
import { StepThree } from "../steps/StepThree";
import { StepTwo } from "../steps/StepTwo";

export const formConfig = {
  steps: {
    1: {
      fields: ["fullname", "rut", "department", "cargo", "phone", "email"],
      component: StepOne,
    },
    2: {
      fields: [
        "fullname_2",
        "rut_2",
        "department_2",
        "phone_2",
        "cargo_2",
        "email_2",
      ],
      component: StepTwo,
    },
    3: {
      fields: [
        "fullname_2",
        "rut_2",
        "department_2",
        "phone_2",
        "cargo_2",
        "email_2",
      ],
      component: StepThree,
    },
  },
  totalSteps: 3,
};
