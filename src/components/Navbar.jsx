import { Link } from "react-router-dom";
import { NavList, headerList } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="w-full flex items-center bg-s2">
          {headerList.map((item) => (
            <p className=" text-white px-8">
              <Link to={item.route}>{item.label}</Link>
            </p>
          ))}
        </div>
        <div className=" flex justify-start items-center bg-primary px-10">
          <img
            src="./assets/logohds.png"
            alt="logo"
            className="object-fit w-[350px] h-[80px] px-10"
          />
          <p className="text-white px-4 font-semibold">
            <Link to={"/"}>Inicio</Link>
          </p>
          <div className="flex gap-5 items-center">
            <div className="border-l-2 h-7" />
            <p className="text-white font-semibold">Ticket Informatica</p>
            <div className="border-l-2 h-7 " />
            <p className="text-white font-semibold hover:bg-secondary transition-colors duration-500 rounded-xl px-2 py-1">
              <Link to={"/contacts"}>Contactos</Link>
            </p>
            <div className="border-l-2 h-7" />
            <p className="text-white font-bold text-2xl absolute right-10">
              ACCESO DIRECTO A PLATAFORMAS HOSPITALARIAS
            </p>
          </div>
        </div>

        {/* <div className="flex flex-1 justify-center gap-x-14 items-center">
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
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
