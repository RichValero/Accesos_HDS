import { Link } from "react-router-dom";
import { headerList } from "../utils/constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="w-full flex bg-s2 py-1">
          {headerList.map((item, index) => (
            <p className=" text-white px-2 flex items-center gap-2" key={index}>
              <img
                src={item.imgUrl}
                alt="icon"
                className="object-cover w-6 h-6"
              />
              <Link to={item.route}>{item.label}</Link>
            </p>
          ))}
        </div>
        <div className=" flex justify-start items-center bg-primary px-10">
          <img
            src="./assets/logohds.png"
            alt="logo"
            className="object-contain w-[300px] h-[70px] px-10"
            width={300}
            height={70}
          />
          <p className="text-white px-4 font-semibold">
            <Link
              to={"/"}
              className=" hover:bg-secondary rounded-lg transition-colors duration-500 px-3 py-1"
            >
              Inicio
            </Link>
          </p>
          <div className="flex gap-5 items-center">
            <div className="border-l-2 h-7" />
            <p className="text-white font-semibold hover:bg-secondary transition-colors duration-500 rounded-xl px-2 py-1">
              <a
                href="https://ticket.hsalvador.cl/Informatica/upload/"
                target="_blank"
              >
                Ticket Informática
              </a>
            </p>
            <div className="border-l-2 h-7 " />
            <p className="text-white font-semibold hover:bg-secondary transition-colors duration-500 rounded-xl px-2 py-1">
              <a
                href="http://ticket.movilizacion.hsalvador.cl/"
                target="_blank"
              >
                Ticket Movilización
              </a>
            </p>
            <div className="border-l-2 h-7 " />
            <p className="text-white font-semibold hover:bg-secondary transition-colors duration-500 rounded-xl px-2 py-1">
              <Link to={"/contacts"}>Contactos Servicios</Link>
            </p>
            <p className="text-white font-bold text-2xl absolute right-10 max-2xl:hidden sm:max-lg:hidden xsm:max-lg:hidden">
              <Link to={"/login"}> Inicio de Sesión</Link>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
