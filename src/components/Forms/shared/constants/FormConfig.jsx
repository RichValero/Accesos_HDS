import { StepOne } from "../../vpnRequestForm/steps/StepOne";
import { StepTwo } from "../../vpnRequestForm/steps/StepTwo";
import { StepThree } from "../../vpnRequestForm/steps/StepThree";
import { StepFour } from "../../vpnRequestForm/steps/StepFour";

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
    4: {
      fields: ["ipaddress", "ports", "justif", "observations"],
      component: StepFour,
    },
  },
  totalSteps: 4,
};
