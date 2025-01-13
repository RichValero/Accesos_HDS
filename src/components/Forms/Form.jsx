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
      className="flex justify-center items-center min-h-screen py-5"
      onSubmit={onSubmitCustom}
      {...props}
      noValidate
    >
      <div className="flex flex-col w-full">{children}</div>
    </form>
  );
};
