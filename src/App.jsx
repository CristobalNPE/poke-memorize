import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const generateRandomValue = () => {
    return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  };

  useEffect(() => {
    let numArray = [];
    for (let i = 0; i < 12; i++) {
      numArray = [...numArray, generateRandomValue()];
    }

    async function fetchData() {
      try {
        const pokemonPromises = numArray.map(async (num) => {
          const pokeResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${num}`
          );
          if (!pokeResponse.ok) {
            throw new Error(`Failed to fetch Pokemon with id: ${num}`);
          }
          const pokemonData = await pokeResponse.json();
          return pokemonData;
        });
        const pokemonListData = await Promise.all(pokemonPromises);
        setPokemonList(pokemonListData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="p-5 h-full min-h-screen  bg-gradient-to-bl from-cyan-800 to-cyan-950  flex flex-col ">
      {/* <h1 className="text-center text-white text-xl font-semibold">Poke Memorize</h1> */}

      <div className="grid grid-cols-1 grid-rows-5  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {pokemonList.map((p) => (
          <Card
            key={p.id}
            name={p.name}
            img={p.sprites.other["official-artwork"]["front_default"]}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
