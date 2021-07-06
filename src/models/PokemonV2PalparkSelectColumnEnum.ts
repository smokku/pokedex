/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PalparkSelectColumn {
  base_score="base_score",
id="id",
pal_park_area_id="pal_park_area_id",
pokemon_species_id="pokemon_species_id",
rate="rate"
}

/**
* PokemonV2PalparkSelectColumn
 *
 * select columns of table "pokemon_v2_palpark"
*/
export const PokemonV2PalparkSelectColumnEnumType = types.enumeration("PokemonV2PalparkSelectColumn", [
        "base_score", // column name
  "id", // column name
  "pal_park_area_id", // column name
  "pokemon_species_id", // column name
  "rate", // column name
      ])
