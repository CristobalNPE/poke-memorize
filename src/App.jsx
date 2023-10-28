import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import {
  randomValue,
  shuffleArray,
  createNumberArray,
  getRandomValuesFromArray,
} from "./utils/utils";
import sucessAudio from "./sounds/onGoodChoice.mp3";
import lossAudio from "./sounds/onLoss.mp3";
import highScoreAudio from "./sounds/onBestScore.mp3";

let idPool = createNumberArray(1000);

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(6);
  const [clickedPokemonIds, setClickedPokemonIds] = useState([]);
  const [gameOver, setGameOver] = useState(true);

  const successA = new Audio(sucessAudio);
  const lossA = new Audio(lossAudio);
  const highScoreA = new Audio(highScoreAudio);

  const playSuccessAudio = () => {
    successA.play();
  };
  const playLossAudio = () => {
    lossA.play();
  };
  const playHighScoreAudio = () => {
    highScoreA.play();
  };
  function handleCardClick(clickedId) {
    if (!clickedPokemonIds.includes(clickedId)) {
      setClickedPokemonIds((prevClickedPokemonIds) => [
        ...prevClickedPokemonIds,
        clickedId,
      ]);
      setScore((prevScore) => prevScore + 1);
      if (score >= highScore) {
        playHighScoreAudio();
      } else {
        playSuccessAudio();
      }
    } else {
      playLossAudio();
      setScore(0);
      setClickedPokemonIds([]);
      setGameOver(true);
    }
  }

  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    let [numArray, remaining] = getRandomValuesFromArray(12, idPool);
    idPool = remaining;

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
    if (gameOver) {
      fetchData();
      setGameOver(false);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score !== 0 && score >= 11 && score % 11 === 0) {
      let [numArray, remaining] = getRandomValuesFromArray(12, idPool);
      idPool = remaining;

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

          setPokemonList((prevPokemonList) => [
            ...prevPokemonList,
            ...pokemonListData,
          ]);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }
  }, [score]);

  const pokemonCardElements = pokemonList.map((p) => (
    <Card
      id={p.id}
      key={p.id}
      name={p.name}
      img={p.sprites.other["official-artwork"]["front_default"]}
      handleCardClick={handleCardClick}
    />
  ));

  return (
    <main className=" p-1 sm:p-5  min-h-[100dvh] overflow-hidden  bg-gradient-to-bl from-cyan-800 to-cyan-950  flex flex-col  ">
      <Header score={score} highScore={highScore} />
      <div className="flex gap-12 flex-wrap justify-center items-center mt-6  flex-1 ">
        {shuffleArray(pokemonCardElements).slice(0, 6)}
      </div>
    </main>
  );
}

export default App;
