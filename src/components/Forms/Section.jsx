import { Link } from "react-router-dom";

export const Section = ({ title, children, url }) => {
  return (
    <div className="flex w-full mb-4">
      <div className="flex space-between items-center mb-4">
        <h4>{title}</h4>
        <Link className={`bg-secondary rounded-md px-4 py-2`} to={url}>
          Edit
        </Link>
      </div>
      <div className="flex justify-center items-center bg-black">
        {children}
      </div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="flex w-full">{children}</div>;
};

//REMEMBER TO CHECK IF STYLING IS CORRECT
