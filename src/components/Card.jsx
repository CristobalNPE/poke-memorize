import PropTypes from "prop-types";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  handleCardClick: PropTypes.func,
};

export default function Card({ id, name, img, handleCardClick }) {
  return (
    <Tilt tiltReverse>
      <article
        onClick={() => handleCardClick(id)}
        className="h-[13rem] w-[10rem] sm:h-[18rem] sm:w-[14rem] md:h-[21rem] md:w-[16rem] ring-8 ring-green-950 select-none cursor-pointer transition-all shadow-md shadow-green-700/50 bg-green-800 hover:shadow-2xl hover:bg-green-600 hover:scale-110 duration-500 rounded-lg  flex flex-col justify-between hover:opacity-100 items-center opacity-90	"
      >
        <img
          className="select-none px-3 py-4 "
          src={img}
          alt={`Picture of the pokemon '${name}'`}
        />
        <div className="bg-green-950 text-center w-full  py-1">
          <h1 className="capitalize text-white text-sm sm:text-lg ">{name}</h1>
        </div>
      </article>
    </Tilt>
  );
}
