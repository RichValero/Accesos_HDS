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
      className="flex flex-col justify-center items-center min-h-screen py-5"
      onSubmit={onSubmitCustom}
      {...props}
      noValidate
    >
      <div className="justify-center items-center w-4/12 bg-gray-50 shadow-lg ring-1 ring-gray-400  rounded-2xl">
        <div className="p-4">{children}</div>
      </div>
    </form>
  );
};
