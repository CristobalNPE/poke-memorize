export default function Header() {
  return (
    <header className="text-white flex flex-col items-center">
      <h1 className=" font-pokeSolid text-6xl line  tracking-wider mb-10 text-center">
        PokeMem
      </h1>
      <div className="min-w-[20rem] items-center sm:items-center sm:flex-row sm:min-w-[40rem] font-light flex flex-col bg-cyan-800 sm:justify-between text-xl mb-3 p-3 rounded-md">
        <h4 className="flex gap-2 items-center">
          Puntuación Actual: <span className="font-semibold text-2xl">0</span>
        </h4>
        <h4 className="flex gap-2 items-center">
          Mejor Puntuación:{" "}
          <span className="font-semibold text-yellow-300 text-3xl">66</span>
        </h4>
      </div>
    </header>
  );
}