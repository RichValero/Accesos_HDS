import { Link } from "react-router-dom";
import { NavList } from "../constants";

const Navbar = () => {
  return (
    <header className=" w-full p-10 flex justify-between  items-center">
      <nav className="flex flex-1">
        <div className="flex flex-1 justify-center gap-x-14 items-center">
          <img
            src="./assets/logo.jpg"
            alt="logo"
            className="m-0 w-[350px] h-[90px] md:max-2xl:hidden sm:max-2xl:hidden xsm:max-2xl:hidden"
          />
          <img
            src="./assets/hdslogo.jpg"
            alt="logo"
            className="m-0 hidden md:max-2xl:block sm:max-2xl:block xsm:max-2xl:block"
          />
          {NavList.map((nav, index) => (
            <div key={index} className="text-primary font-bold">
              <a href={nav.route}>
                <p className="text-3xl px-5 lg:block">{nav.title}</p>
              </a>
              <p className="hover:bg-secondary hover:text-white rounded-lg text-3xl px-4">
                <Link to={"/contacts"}>{nav.label}</Link>
              </p>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
