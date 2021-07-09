import React from "react";
import { Space, Result, Card } from "antd";

import PokemonCard from "../components/PokemonCard";

export default function PokemonCardsList({ pokedexData }) {
  return pokedexData.length > 0 ? (
    <Space wrap>
      {pokedexData.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Space>
  ) : (
    <Card>
      <Result
        status="warning"
        title="No results. Please try a different filter value."
      />
    </Card>
  );
}
