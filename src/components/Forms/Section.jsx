import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Section = ({ title, children, url }) => {
  return (
    <div className="flex flex-col w-full mb-5 pb-2 ">
      {" "}
      {/*border-2 border-blue-700*/}
      <div className="flex justify-between items-center mb-2 ">
        <h4 className="text-2xl mb-3">{title}</h4>
        <Link to={url}>
          <Button variant="primary" size="small">
            Editar
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mb-3 space-y-1.5 font-montserrat font-medium ">
        {children}
      </div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full">{children}</div>
  );
};

//REMEMBER TO CHECK IF STYLING IS CORRECT
