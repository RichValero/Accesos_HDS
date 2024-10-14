import React from "react";
import { cardList } from "../constants";
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
    <section className="mx-auto px-10">
      <div className="flex flex-1 pt-10 gap-4 justify-center items-center sm:max-xsm:flex-col sm:max-xl:px-[100px] md:max-xl:px-[150px]">
        <p className="text-primary text-xl font-semibold">Mostrar:</p>
        <button
          className={`transition-all px-4 py-2 rounded-lg font-bold ${
            filter === "admin"
              ? "bg-secondary text-white"
              : "text-primary hover:bg-secondary hover:text-white "
          }`}
          onClick={() => handleFilter("admin")}
        >
          Administrativas
        </button>
        <button
          className={`transition-all px-4 py-2 rounded-lg font-bold ${
            filter === "clinic"
              ? "bg-secondary text-white"
              : "text-primary hover:bg-secondary hover:text-white "
          }`}
          onClick={() => handleFilter("clinic")}
        >
          Clinicas
        </button>
        <button
          className="text-primary hover:bg-secondary hover:text-white transition-all px-4 py-2 rounded-lg font-bold"
          onClick={() => handleFilter("all")}
        >
          Todas
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 xsm:max-2xl:grid-cols-1 sm:max-2xl:grid-cols-2 md:max-2xl:grid-cols-3 lg:max-2xl:grid-cols-4 relative mx-auto sm:max-xl:px-[50px] md:max-xl:px-[100px] py-10 ">
        {filteredCards.map((card, index) => (
          <a
            target="_blank"
            key={index}
            href={card.route}
            className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-primary hover:ring-primary transition-all w-[190px] h-[200px]"
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
