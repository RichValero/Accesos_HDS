import { forwardRef, useImperativeHandle, useRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef();

    useImperativeHandle(ref, () => ({
      click: () => {
        buttonRef.current?.click();
      },
    }));

    return (
      <button
        className={`bg-${variant}-500 hover:bg-${variant}-600 text-black font-bold py-2 px-4 rounded-sm`}
        {...props}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }
);

//REMEMBER TO LOOK WHAT FORWARDREF AND USEIMPERATIVEHANDLE DO
