/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemontypepastSelectColumn {
  generation_id="generation_id",
id="id",
pokemon_id="pokemon_id",
slot="slot",
type_id="type_id"
}

/**
* PokemonV2PokemontypepastSelectColumn
 *
 * select columns of table "pokemon_v2_pokemontypepast"
*/
export const PokemonV2PokemontypepastSelectColumnEnumType = types.enumeration("PokemonV2PokemontypepastSelectColumn", [
        "generation_id", // column name
  "id", // column name
  "pokemon_id", // column name
  "slot", // column name
  "type_id", // column name
      ])
