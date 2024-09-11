import React from "react";
import { cardList } from "../constants";
import { useState } from "react";

const GridCard = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 xsm:max-2xl:grid-cols-1 sm:max-2xl:grid-cols-2 md:max-2xl:grid-cols-3 lg:max-2xl:grid-cols-4 px-[250px] sm:max-xl:px-[50px] md:max-xl:px-[100px] py-[100px] ">
        {cardList.map((card) => (
          <>
            <a
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
          </>
        ))}
      </div>
    </>
  );
};

export default GridCard;
