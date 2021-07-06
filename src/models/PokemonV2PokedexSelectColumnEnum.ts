/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokedexSelectColumn {
  id="id",
is_main_series="is_main_series",
name="name",
region_id="region_id"
}

/**
* PokemonV2PokedexSelectColumn
 *
 * select columns of table "pokemon_v2_pokedex"
*/
export const PokemonV2PokedexSelectColumnEnumType = types.enumeration("PokemonV2PokedexSelectColumn", [
        "id", // column name
  "is_main_series", // column name
  "name", // column name
  "region_id", // column name
      ])
