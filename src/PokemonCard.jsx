import React, { useState } from "react";
import "./PokemonCard.css";

function getRandomPokemonNumber() {
  return Math.floor(Math.random() * 1025) + 1;
}

function PokemonCard() {
  const [pokemonNumber, setPokemonNumber] = useState(getRandomPokemonNumber());

  const handleClick = () => {
    setPokemonNumber(getRandomPokemonNumber());
  };

  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;

  return (
    <div className="PokemonCard">
      <h1>Pokemon #{pokemonNumber}</h1>
      <img src={pokemonImage} alt={`Pokemon ${pokemonNumber}`} />
      <button onClick={handleClick}>Generate New Pokémon</button>
    </div>
  );
}

export default PokemonCard;
