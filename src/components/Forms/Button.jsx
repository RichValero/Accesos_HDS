import { forwardRef, useImperativeHandle, useRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", size = "medium", ...props }, ref) => {
    const buttonRef = useRef();

    useImperativeHandle(ref, () => ({
      click: () => {
        buttonRef.current?.click();
      },
    }));

    const variantClasses = {
      primary:
        "bg-sky-500 hover:bg-sky-700 text-white font-semibold hover:text-white hover:font-semibold transition-colors duration-500 flex gap-2 items-center",
      secondary: "bg-secondary",
      success: "bg-success", //OPTIONAL
      dashboard:
        "bg-white text-primary font-semibold ring-1 ring-slate-900/5 hover:bg-slate-500/5", //OPTIONAL
      danger: "bg-danger", //OPTIONAL
      warning: "bg-warning", //OPTIONAL
      info: "bg-info", //OPTIONAL
      light: "bg-light", //OPTIONAL
      dark: "bg-dark", //OPTIONAL
    };

    const sizeClasses = {
      small: "px-2 py-1 mb-2 text-sm rounded-xl",
      medium: "px-4 py-2 mb-4 text-md rounded-3xl",
      large: "px-6 py-3 mb-6 text-lg rounded-3xl",
      dashboard: "px-10 py-2 text-md rounded-tr-xl rounded-tl-xl ",
    };

    // const baseClasses = `rounded font-medium transition-all duration-200 ${}` IN CASE DISABLE IS NEEDED

    const classes = `${variantClasses[variant]} ${sizeClasses[size]}`;

    return (
      <button className={classes} ref={buttonRef} {...props}>
        {children}
      </button>
    );
  }
);

//`bg-${variant}  text-white font-semibold py-2 px-4 rounded-lg mb-5 inline-flex items-center justify-center`
//REMEMBER TO LOOK WHAT FORWARDREF AND USEIMPERATIVEHANDLE DO
