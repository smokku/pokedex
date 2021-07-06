/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonmoveSelectColumn {
  id="id",
level="level",
move_id="move_id",
move_learn_method_id="move_learn_method_id",
order="order",
pokemon_id="pokemon_id",
version_group_id="version_group_id"
}

/**
* PokemonV2PokemonmoveSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonmove"
*/
export const PokemonV2PokemonmoveSelectColumnEnumType = types.enumeration("PokemonV2PokemonmoveSelectColumn", [
        "id", // column name
  "level", // column name
  "move_id", // column name
  "move_learn_method_id", // column name
  "order", // column name
  "pokemon_id", // column name
  "version_group_id", // column name
      ])
