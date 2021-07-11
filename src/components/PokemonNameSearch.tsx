import React from "react";
import { Select } from "antd";
import { useFela } from "react-fela";

export type PokemonNameSearchProps = {
  onChange?(values: string[]): void;
};

const PokemonNameSearch = ({ onChange }: PokemonNameSearchProps) => {
  const { css } = useFela();
  const [selected, setSelected] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    if (onChange) {
      const values = [...selected];
      if (search && !values.includes(search))
        values.push(search.toLocaleLowerCase());
      onChange(values);
    }
  }, [onChange, search, selected]);

  return (
    <Select
      mode="tags"
      allowClear
      tokenSeparators={[","]}
      placeholder="Pokémon name"
      value={selected.map((value) => value.toLocaleLowerCase())}
      onChange={setSelected}
      onSearch={setSearch}
      onClear={() => setSearch("")}
      className={css({ minWidth: "20rem" })}
      notFoundContent={"Type name to start search"}
    />
  );
};

export default PokemonNameSearch;
