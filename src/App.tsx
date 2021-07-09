import React from "react";
import { useFela } from "react-fela";

import pokemonLogo from "./pokemon-logo.png";

export default function App() {
  const { css } = useFela();

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
      <h1>Pokémon Pokédex</h1>
    </main>
  );
}
