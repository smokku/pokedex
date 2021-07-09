import React from "react";
import { useFela } from "react-fela";

import PokemonCardsList from "../containers/PokemonCardsList";
import pokemonLogo from "../pokemon-logo.png";

export default function App() {
  const { css } = useFela();

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <PokemonCardsList />
    </main>
  );
}
