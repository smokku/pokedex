/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonformSelectColumn {
  form_name="form_name",
form_order="form_order",
id="id",
is_battle_only="is_battle_only",
is_default="is_default",
is_mega="is_mega",
name="name",
order="order",
pokemon_id="pokemon_id",
version_group_id="version_group_id"
}

/**
* PokemonV2PokemonformSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonform"
*/
export const PokemonV2PokemonformSelectColumnEnumType = types.enumeration("PokemonV2PokemonformSelectColumn", [
        "form_name", // column name
  "form_order", // column name
  "id", // column name
  "is_battle_only", // column name
  "is_default", // column name
  "is_mega", // column name
  "name", // column name
  "order", // column name
  "pokemon_id", // column name
  "version_group_id", // column name
      ])
