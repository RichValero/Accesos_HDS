import { useNavigate } from "react-router-dom";

export const Form = ({ children, onSubmit, nextStep, ...props }) => {
  const navigate = useNavigate();

  const onSubmitCustom = (e) => {
    e.preventDefault();
    onSubmit();
    navigate(nextStep);
  };

  return (
    <form
      className="flex flex-col justify-center items-center min-h-screen"
      onSubmit={onSubmitCustom}
      {...props}
      noValidate
    >
      {children}
    </form>
  );
};
