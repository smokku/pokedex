/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2GenerationSelectColumn {
  id="id",
name="name",
region_id="region_id"
}

/**
* PokemonV2GenerationSelectColumn
 *
 * select columns of table "pokemon_v2_generation"
*/
export const PokemonV2GenerationSelectColumnEnumType = types.enumeration("PokemonV2GenerationSelectColumn", [
        "id", // column name
  "name", // column name
  "region_id", // column name
      ])
