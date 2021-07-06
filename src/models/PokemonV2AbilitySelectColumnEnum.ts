/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2AbilitySelectColumn {
  generation_id="generation_id",
id="id",
is_main_series="is_main_series",
name="name"
}

/**
* PokemonV2AbilitySelectColumn
 *
 * select columns of table "pokemon_v2_ability"
*/
export const PokemonV2AbilitySelectColumnEnumType = types.enumeration("PokemonV2AbilitySelectColumn", [
        "generation_id", // column name
  "id", // column name
  "is_main_series", // column name
  "name", // column name
      ])
