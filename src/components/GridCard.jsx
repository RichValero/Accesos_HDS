import React from "react";
import { cardList } from "../constants";
import { useState } from "react";

const GridCard = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredCards = cardList.filter(
    (card) => filter === "all" || card.category === filter
  );

  return (
    <>
      <div className="flex px-[260px] pt-10 gap-4 justify-start items-center">
        <p className="text-primary font-semibold">Filtrar por:</p>
        <button
          className="text-primary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg font-bold"
          onClick={() => handleFilter("admin")}
        >
          Administrativas
        </button>
        <button
          className="text-primary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg font-bold"
          onClick={() => handleFilter("clinic")}
        >
          Clinicas
        </button>
        <button
          className="text-primary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg font-bold"
          onClick={() => handleFilter("all")}
        >
          Todas
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 xsm:max-2xl:grid-cols-1 sm:max-2xl:grid-cols-2 md:max-2xl:grid-cols-3 lg:max-2xl:grid-cols-4 px-[250px] sm:max-xl:px-[50px] md:max-xl:px-[100px] py-10 ">
        {filteredCards.map((card) => (
          <a
            target="_blank"
            key={card}
            href={card.route}
            className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-primary hover:ring-primary w-[190px] h-[200px]"
          >
            <div className="flex justify-center space-x-3">
              <img
                src={card.imgUrl}
                width={60}
                height={60}
                className="rounded-lg"
              />
              {/* <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
                {cardList.label}
                </h3> */}
            </div>
            <p className="text-primary group-hover:text-white text-2xl text-center font-bold">
              {card.label}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default GridCard;
