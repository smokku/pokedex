/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonstatSelectColumn {
  base_stat="base_stat",
effort="effort",
id="id",
pokemon_id="pokemon_id",
stat_id="stat_id"
}

/**
* PokemonV2PokemonstatSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonstat"
*/
export const PokemonV2PokemonstatSelectColumnEnumType = types.enumeration("PokemonV2PokemonstatSelectColumn", [
        "base_stat", // column name
  "effort", // column name
  "id", // column name
  "pokemon_id", // column name
  "stat_id", // column name
      ])
