/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemontypeSelectColumn {
  id="id",
pokemon_id="pokemon_id",
slot="slot",
type_id="type_id"
}

/**
* PokemonV2PokemontypeSelectColumn
 *
 * select columns of table "pokemon_v2_pokemontype"
*/
export const PokemonV2PokemontypeSelectColumnEnumType = types.enumeration("PokemonV2PokemontypeSelectColumn", [
        "id", // column name
  "pokemon_id", // column name
  "slot", // column name
  "type_id", // column name
      ])
