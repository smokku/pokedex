/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2TypeSelectColumn {
  generation_id="generation_id",
id="id",
move_damage_class_id="move_damage_class_id",
name="name"
}

/**
* PokemonV2TypeSelectColumn
 *
 * select columns of table "pokemon_v2_type"
*/
export const PokemonV2TypeSelectColumnEnumType = types.enumeration("PokemonV2TypeSelectColumn", [
        "generation_id", // column name
  "id", // column name
  "move_damage_class_id", // column name
  "name", // column name
      ])
