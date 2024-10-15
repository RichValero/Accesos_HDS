import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-1 items-center w-full justify-evenly bg-primary py-10 h-[300px] leading-[2.5rem]">
        <div className="flex justify-start">
          <img
            src="./assets/logohds.png"
            className="flex object-contain w-[350px] h-[90px]"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-white font-semibold">Contáctanos</h1>
          <span className="text-white font-semibold">
            Av. Salvador 364, Providencia, Región Metropolitana
          </span>
          <h2 className="text-white font-semibold">soporte@hsalvador.cl</h2>
          <p className="text-white font-semibold">2 25753851 / (253851)</p>
        </div>
        <div className="flex flex-col items-center px-10">
          <p className="text-white font-semibold">Sigamos Conectados</p>
          <p className="text-white font-semibold hover:bg-secondary transition-colors duration-500 rounded-xl px-1 py-0.5">
            <a
              href="https://ticket.hsalvador.cl/Informatica/upload/"
              target="_blank"
            >
              Ticket Informática
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
