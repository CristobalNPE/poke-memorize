export default function Header({ score, highScore }) {
  return (
    <header className="max-w-6xl mx-auto select-none text-white flex flex-col sm:flex-row items-center gap-8 w-full justify-between">
      <h1 className="font-pokeSolid text-6xl tracking-wider mb-2 md:mb-10 text-center">
        PokéMem
      </h1>
      <div className="w-fit gap-2 md:gap-5 items-center sm:items-center  md:flex-row ring-2 shadow-md  font-light flex flex-col bg-cyan-800 sm:justify-between text-xl mb-3 p-3 rounded-md">
        <h4 className="flex gap-2 items-center">
          Puntuación: <span className="font-semibold text-2xl">{score}</span>
        </h4>

        <h4 className="md:border-l-2 border-cyan-600 md:pl-2 flex gap-2 items-center">
          Mejor Puntuación:{" "}
          <span className="font-semibold text-yellow-300 text-2xl">
            {highScore}
          </span>
        </h4>
      </div>
    </header>
  );
}
