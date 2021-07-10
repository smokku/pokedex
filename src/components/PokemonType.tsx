import React from "react";
import { useFela } from "react-fela";

import { POKEMON_TYPE_ICONS } from "../constants";

export type PokemonTypeProps = { type: string };

export default function PokemonType({ type }: PokemonTypeProps) {
  const { css } = useFela();

  return (
    <img
      src={POKEMON_TYPE_ICONS[type] || ""}
      alt={type}
      title={type}
      className={css({
        height: "24px",
        margin: "4px",
      })}
    />
  );
}
