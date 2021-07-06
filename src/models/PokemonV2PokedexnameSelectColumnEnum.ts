/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokedexnameSelectColumn {
  id="id",
language_id="language_id",
name="name",
pokedex_id="pokedex_id"
}

/**
* PokemonV2PokedexnameSelectColumn
 *
 * select columns of table "pokemon_v2_pokedexname"
*/
export const PokemonV2PokedexnameSelectColumnEnumType = types.enumeration("PokemonV2PokedexnameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "pokedex_id", // column name
      ])
