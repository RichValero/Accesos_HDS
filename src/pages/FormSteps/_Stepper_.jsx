import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppState } from "../../hooks/state";

export const Stepper = () => {
  const location = useLocation();
  const steps = [
    { path: "/stepone", label: "Paso 1" },
    { path: "/steptwo", label: "Paso 2" },
    { path: "/stepthree", label: "Paso 3" },
    { path: "/stepfour", label: "Paso 4" },
    { path: "/confirm", label: "Confirmar" },
  ];

  const getLinksClass = (path) => {
    return (
      "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md " +
      (path === location.pathname
        ? "bg-sky-700 text-white"
        : "text-gray-700 bg-white hover:bg-gray-50")
    );
  };

  const getProgressWidth = () => {
    const currentIndex = steps.findIndex(
      (step) => step.path === location.pathname
    );
    return ((currentIndex + 1) / steps.length) * 100;
  };

  return (
    <nav className="flex justify-center items-center w-full mb-5">
      <div className="w-full bg-gray-200 h2 rounded-lg ovlerflow-hidden">
        <div
          className="bg-sky-700 h-full"
          style={{ width: `${getProgressWidth()}%` }}
        ></div>
      </div>

      <ol>
        {steps.map((step, index) => {
          <li key={index}>
            {" "}
            <span className={getLinksClass(step.path)}>{step.label}</span>
          </li>;
        })}
      </ol>
    </nav>
  );

  // const getLinkClass = (path) => {
  //   return (
  //     " inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" +
  //     (path === location.pathname ? "bg-sky-700" : undefined)
  //   );
  // };

  // return (
  //   <nav className="flex justify-center items-center ">
  //     <div className="w-full mb-5">
  //       <ol className="flex justify-evenly">
  //         <li>
  //           <span className={getLinkClass("/stepone")}>Paso 1</span>
  //         </li>
  //         <li>
  //           <span className={getLinkClass("/steptwo")}>Paso 2</span>
  //         </li>
  //         <li>
  //           <span className={getLinkClass("/stepthree")}>Pase 3</span>
  //         </li>
  //         <li>
  //           <span className={getLinkClass("/stepfour")}>Pase 4</span>
  //         </li>
  //         <li>
  //           <span className={getLinkClass("/confirm")}>Confirmar</span>
  //         </li>
  //       </ol>
  //     </div>
  //   </nav>
  // );
};
