import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} className="inputformat" {...props} />;
});

//REMEMBER TO LOOK WHAT FORWARDREF AND USEIMPERATIVEHANDLE DO
