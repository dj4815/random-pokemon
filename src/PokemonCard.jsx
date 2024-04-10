import React from "react";

const pokemonNumber = getRandomNumber();
let pokemonImage = imageURL();

function getRandomNumber() {
  return Math.floor(Math.random() * 1025) + 1;
}

function imageURL() {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;
  return pokemonImage;
}

function PokemonCard() {
  return (
    <>
      <h2>Pokemon #{pokemonNumber}</h2>
      <img src={pokemonImage}/>
    </>
  );
}

export default PokemonCard;
