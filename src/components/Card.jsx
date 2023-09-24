import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
};

export default function Card({ id, name, img }) {
  return (
    <article className="cursor-pointer transition-colors shadow-md shadow-green-700/50 bg-green-800 hover:bg-green-600 hover:shadow-green-300/50 rounded-lg p-5 flex flex-col items-center 	">
      <img className="" src={img} alt={`Picture of the pokemon '${name}'`} />
      <div className="bg-green-950 text-center w-full rounded-md py-1">
        <h1 className="capitalize text-white text-xl font-semibold">{name}</h1>
      </div>
    </article>
  );
}
