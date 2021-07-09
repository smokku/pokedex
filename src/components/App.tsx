import React from "react";
import { useFela } from "react-fela";

import PokemonCardsList from "../containers/PokemonCardsList";
import pokemonLogo from "../pokemon-logo.png";

export default function App() {
  const { css } = useFela();

  const pokedexData = [];

  return (
    <main
      className={css({
        textAlign: "center",
      })}
    >
      <img
        src={pokemonLogo}
        alt=""
        className={css({
          maxWidth: "90%",
          width: "400px",
        })}
      />
      <PokemonCardsList pokedexData={pokedexData} />
    </main>
  );
}
