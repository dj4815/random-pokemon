import React from "react";
import "./PokemonCard.css";

const pokemonNumber = Math.floor(Math.random() * 1025) + 1;
const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;

function PokemonCard() {
  return (
    <div className="PokemonCard">
      <h1>Pokemon #{pokemonNumber}</h1>
      <img src={pokemonImage} />
    </div>
  );
}

export default PokemonCard;
