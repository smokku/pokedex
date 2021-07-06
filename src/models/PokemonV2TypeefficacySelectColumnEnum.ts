/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2TypeefficacySelectColumn {
  damage_factor="damage_factor",
damage_type_id="damage_type_id",
id="id",
target_type_id="target_type_id"
}

/**
* PokemonV2TypeefficacySelectColumn
 *
 * select columns of table "pokemon_v2_typeefficacy"
*/
export const PokemonV2TypeefficacySelectColumnEnumType = types.enumeration("PokemonV2TypeefficacySelectColumn", [
        "damage_factor", // column name
  "damage_type_id", // column name
  "id", // column name
  "target_type_id", // column name
      ])
