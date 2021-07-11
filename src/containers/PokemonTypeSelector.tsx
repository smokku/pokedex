import React from "react";
import { Select, SelectProps, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { useFela } from "react-fela";

import { StoreContext } from "../models/reactUtils";
import PokemonType from "../components/PokemonType";

type TagRenderFunc = SelectProps<string[]>["tagRender"];

const tagRender: TagRenderFunc = (props) => {
  const { value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
      <PokemonType type={value as string} size="small" />
    </Tag>
  );
};

export type PokemonTypeSelectorProps = {
  onChange?(values: string[]): void;
};

export default observer(({ onChange }: PokemonTypeSelectorProps) => {
  const { css } = useFela();
  const store = React.useContext(StoreContext);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = React.useCallback(
    (values) => {
      setSelected(values);
      if (onChange) onChange(values);
    },
    [setSelected, onChange]
  );

  return (
    <Select
      mode="multiple"
      showArrow
      allowClear
      tagRender={tagRender}
      placeholder="Pokémon type"
      value={selected}
      onChange={handleChange}
      className={css({ minWidth: "20rem" })}
    >
      {store.pokemonTypes.map((type) => (
        <Select.Option key={type} value={type}>
          <PokemonType type={type} size="small" /> {type}
        </Select.Option>
      ))}
    </Select>
  );
});
