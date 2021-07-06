/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonabilitySelectColumn {
  ability_id="ability_id",
id="id",
is_hidden="is_hidden",
pokemon_id="pokemon_id",
slot="slot"
}

/**
* PokemonV2PokemonabilitySelectColumn
 *
 * select columns of table "pokemon_v2_pokemonability"
*/
export const PokemonV2PokemonabilitySelectColumnEnumType = types.enumeration("PokemonV2PokemonabilitySelectColumn", [
        "ability_id", // column name
  "id", // column name
  "is_hidden", // column name
  "pokemon_id", // column name
  "slot", // column name
      ])
