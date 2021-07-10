import React from "react";
import { useFela } from "react-fela";

import { POKEMON_TYPE_ICONS } from "../constants";

export type PokemonTypeProps = {
  type: string;
  size?: "normal" | "small";
};

const sizes = {
  small: "16px",
  normal: "24px",
};

export default function PokemonType({
  type,
  size = "normal",
}: PokemonTypeProps) {
  const { css } = useFela();

  return (
    <img
      src={POKEMON_TYPE_ICONS[type] || ""}
      alt={type || ""}
      title={type}
      className={css({
        height: sizes[size] || sizes.normal,
        margin: "4px",
      })}
    />
  );
}
