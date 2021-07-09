import React from "react";
import { observer } from "mobx-react-lite";
import { Space, Result, Card, Spin } from "antd";
import { useFela } from "react-fela";

import PokemonCard from "../components/PokemonCard";

import { useQuery } from "../models/reactUtils";

export default observer(() => {
  const { css } = useFela();

  const { loading, data, error } = useQuery((store) =>
    store.queryPokemon_v2_pokemon({ limit: 123 }, (p) =>
      p.name
        .pokemon_v2_pokemontypes((t) => t.pokemon_v2_type((t) => t.name))
        .pokemon_v2_pokemonspecy((s) =>
          s.pokemon_v2_pokemoncolor((c) => c.name)
        )
    )
  );

  if (loading) return <Spin />;
  if (error || !data)
    return (
      <Result
        status="error"
        title={error.toString() || "Cannot load Pokédex data"}
      />
    );

  const { pokemon_v2_pokemon: pokemons } = data;

  return pokemons.length > 0 ? (
    <Space
      wrap
      className={css({
        justifyContent: "center",
      })}
    >
      {pokemons.map((pokemon) => (
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
});
