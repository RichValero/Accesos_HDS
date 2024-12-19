import React from "react";
import { cardList } from "../utils/constants";
import { useState } from "react";

const Card = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredCards = cardList.filter(
    (card) => filter === "all" || card.category === filter
  );

  return (
    <section className="flex flex-col p-6 gap-2 max-sm:p-1">
      <div className="flex flex-1 pt-10 gap-4 justify-center">
        <p className="text-primary text-xl font-semibold">Mostrar:</p>
        <button
          className={`transition-all px-4 py-1 rounded-xl font-bold ${
            filter === "all"
              ? "bg-secondary text-white"
              : "text-primary hover:bg-secondary hover:text-white transition-colors duration-500"
          }`}
          onClick={() => handleFilter("all")}
        >
          Todas
        </button>
        <button
          className={`transition-all px-4 py-1 rounded-xl font-bold ${
            filter === "admin"
              ? "bg-secondary text-white"
              : "text-primary hover:bg-secondary hover:text-white transition-colors duration-500"
          }`}
          onClick={() => handleFilter("admin")}
        >
          Administrativas
        </button>
        <button
          className={`transition-all px-4 py-1 rounded-xl font-bold ${
            filter === "clinic"
              ? "bg-secondary text-white"
              : "text-primary hover:bg-secondary hover:text-white transition-colors duration-500"
          }`}
          onClick={() => handleFilter("clinic")}
        >
          Clínicas
        </button>
      </div>
      <div className="grid grid-cols-6 gap-10 relative mx-auto max-sm:grid-cols-1 xsm:max-2xl:grid-cols-2 sm:max-2xl:grid-cols-2 md:max-2xl:grid-cols-3 lg:max-2xl:grid-cols-4 sm:max-xl:px-[50px] max-md:p-5 py-10 ">
        {filteredCards.map((card, index) => (
          <a
            target="_blank"
            key={index}
            href={card.route}
            className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-primary hover:ring-primary transition-all duration-300 w-[190px] h-[200px]"
          >
            <div className="flex justify-center space-x-3">
              <img
                src={card.imgUrl}
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
            <p className="text-primary group-hover:text-white text-2xl text-center font-bold">
              {card.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Card;
