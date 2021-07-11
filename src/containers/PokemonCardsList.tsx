import React from "react";
import { observer } from "mobx-react-lite";
import { Space, Result, Card, Spin, Divider } from "antd";
import { useFela } from "react-fela";

import PokemonTypeSelector from "./PokemonTypeSelector";
import PokemonCard from "../components/PokemonCard";

import { useQuery } from "../models/reactUtils";
import PokemonNameSearch from "../components/PokemonNameSearch";

export default observer(() => {
  const { css } = useFela();

  const [types, setTypes] = React.useState<string[]>([]);
  const [names, setNames] = React.useState<string[]>([]);

  const { loading, data, error } = useQuery((store) =>
    store.queryPokemon_v2_pokemon({ limit: 123 }, (p) =>
      p.name
        .pokemon_v2_pokemontypes((t) => t.pokemon_v2_type((t) => t.name))
        .pokemon_v2_pokemonspecy((s) =>
          s.pokemon_v2_pokemoncolor((c) => c.name)
        )
    )
  );

  if (loading && !data) return <Spin />;

  if (error || !data)
    return (
      <Result
        status="error"
        title={error.toString() || "Cannot load Pokédex data"}
      />
    );

  let { pokemon_v2_pokemon: pokemons } = data;

  if (pokemons.length === 0)
    return (
      <Card>
        <Result
          status="warning"
          title="No results. Please try a different filter value."
        />
      </Card>
    );

  if (names.length > 0) {
    pokemons = pokemons.filter((p) =>
      names.reduce(
        (ret: boolean, name) => ret || !!p.name?.includes(name),
        false
      )
    );
  }
  if (types.length > 0) {
    pokemons = pokemons.filter((p) => {
      let pass = false;
      p.pokemon_v2_pokemontypes?.forEach((t) => {
        if (types.includes(t.pokemon_v2_type.name)) pass = true;
      });
      return pass;
    });
  }

  return (
    <>
      <Space direction="horizontal">
        <PokemonNameSearch onChange={setNames} />
        <PokemonTypeSelector onChange={setTypes} />
      </Space>
      <Divider />
      <Space
        wrap
        className={css({
          justifyContent: "center",
        })}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Space>
    </>
  );
});
