import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      " inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" +
      (path === location.pathname ? "bg-sky-700" : undefined)
    );
  };

  return (
    <nav className="absolute left-1/3 top-50">
      <div className="w-min-screen">
        <ol className="flex">
          <li>
            <span className={getLinkClass("/step")}>Contact</span>
          </li>
          <li>
            <span className={getLinkClass("/education")}>Education</span>
          </li>
          <li>
            <span className={getLinkClass("/about")}>About</span>
          </li>
          <li>
            <span className={getLinkClass("/asset")}>Asset</span>
          </li>
          <li>
            <span className={getLinkClass("/confirm")}>Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
