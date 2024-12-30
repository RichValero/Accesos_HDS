import React from "react";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="flex flex-col mb-2 w-full">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      {children}
      {error && (
        <small className="text-red-500 font-semibold">{error.message}</small>
      )}
    </div>
  );
};

//GET ID PROP FROM A CHILD ELEMENT
export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};

// This component also handles the error message and, as a bonus,
// sets the label's htmlFor attribute to match the id of the child input,
//  making the input properly accessible. We just need to make sure that the input has an id.
//  We'll also abstract the logic for the Form, Input, and Button components,
//  although they are just wrappers for the native HTML elements with custom styling applied
