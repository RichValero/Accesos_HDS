import { Link } from "react-router-dom";
import { headerList } from "../../utils/constants";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="w-full flex justify-start bg-s2 py-1">
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
        <div className="flex justify-center items-center bg-primary">
          <img
            src="./assets/logohds.png"
            alt="logo"
            className="object-contain w-[300px] h-[70px]"
            width={300}
            height={70}
          />
          <div className="flex gap-5 items-center">
            <p className="text-white font-semibold hover:bg-gray-700 transition-colors duration-500 rounded px-2 py-1">
              <a
                href="https://ticket.hsalvador.cl/Informatica/upload/"
                target="_blank"
              >
                Ticket Informática
              </a>
            </p>
            <div className="border-l-2 h-7 " />
            <p className="text-white font-semibold hover:bg-gray-700 transition-colors duration-500 rounded px-2 py-1">
              <a
                href="http://ticket.movilizacion.hsalvador.cl/"
                target="_blank"
              >
                Ticket Movilización
              </a>
            </p>
            <div className="border-l-2 h-7 " />
            <p className="text-white font-semibold hover:bg-gray-700 transition-colors duration-500 rounded px-2 py-1">
              <Link to={"/contacts"}>Contactos Servicios</Link>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};
