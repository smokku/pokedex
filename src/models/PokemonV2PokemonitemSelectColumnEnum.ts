/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonitemSelectColumn {
  id="id",
item_id="item_id",
pokemon_id="pokemon_id",
rarity="rarity",
version_id="version_id"
}

/**
* PokemonV2PokemonitemSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonitem"
*/
export const PokemonV2PokemonitemSelectColumnEnumType = types.enumeration("PokemonV2PokemonitemSelectColumn", [
        "id", // column name
  "item_id", // column name
  "pokemon_id", // column name
  "rarity", // column name
  "version_id", // column name
      ])
