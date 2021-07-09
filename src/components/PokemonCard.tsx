import React from "react";
import { Card, Typography, Form, Switch } from "antd";
import { useFela } from "react-fela";

const { Text, Title } = Typography;

export default function PokemonCard({ pokemon }) {
  const { css, theme } = useFela();

  return (
    <Card
      className={css({
        minWidth: 275,
      })}
      actions={[
        <Form.Item
          className={css({
            justifyContent: "center",
          })}
          label="Captured"
          name="captured"
        >
          <Switch
            checked={pokemon.captured}
            // onChange={handleCapturedChange}
          />
        </Form.Item>,
      ]}
    >
      <Text
        type="secondary"
        className={css({
          minWidth: 275,
        })}
      >
        {pokemon.id}
      </Text>
      <img
        alt={pokemon.name}
        src={pokemon.imgUrl}
        className={css({
          height: theme.spacing(16),
          borderRadius: 0,
          marginBottom: theme.spacing(1),
        })}
      />
      <Title level={2}>{pokemon.name}</Title>
      <Text type="secondary">{pokemon.pokemonTypes.join(", ")}</Text>
    </Card>
  );
}
