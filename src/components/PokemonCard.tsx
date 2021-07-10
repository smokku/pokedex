import React from "react";
import { observer } from "mobx-react-lite";
import { Card, Typography, Form, Switch } from "antd";
import { useFela } from "react-fela";

import PokemonType from "./PokemonType";
import { PokemonV2PokemonModelType } from "../models";
import { ThemeType } from "../theme";

const { Title } = Typography;

export type PokemonCardProps = {
  pokemon: PokemonV2PokemonModelType;
};

export default observer(({ pokemon }: PokemonCardProps) => {
  const { css, theme } = useFela<ThemeType>();

  const color = pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name;

  return (
    <Card
      size="small"
      title={pokemon.id}
      className={css({
        minWidth: "275px",
        textAlign: "center",
      })}
      actions={[
        <Form.Item
          label="Captured"
          name="captured"
          className={css({
            paddingLeft: theme.spacing(1),
          })}
        >
          <Switch
            checked={pokemon.captured}
            onChange={pokemon.toggleCaptured}
          />
        </Form.Item>,
      ]}
    >
      <img
        alt={pokemon.name}
        src={`https://img.pokemondb.net/sprites/bank/normal/${pokemon.name}.png`}
        className={css({
          height: theme.spacing(8),
          borderRadius: 0,
        })}
      />
      <Card.Meta
        title={
          <Title
            level={2}
            style={{ color }}
            className={css({
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
            })}
          >
            {pokemon.name}
          </Title>
        }
        description={pokemon.pokemon_v2_pokemontypes?.map(
          ({ pokemon_v2_type: { name } }) => (
            <PokemonType type={name} key={name} />
          )
        )}
      />
    </Card>
  );
});
