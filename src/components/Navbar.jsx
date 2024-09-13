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
            className="m-0 w-[350px] h-[90px]"
          />
          {NavList.map((nav, i) => (
            <div key={i} className="text-primary font-bold">
              <a href={nav.route}>
                <p className="text-3xl px-5">{nav.title}</p>
              </a>
              <p className="hover:bg-secondary hover:text-primary rounded-lg text-2xl px-4">
                <Link to={"./Numeros"}>{nav.label}</Link>
              </p>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
