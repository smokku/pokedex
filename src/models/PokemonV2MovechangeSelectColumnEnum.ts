/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MovechangeSelectColumn {
  accuracy="accuracy",
id="id",
move_effect_chance="move_effect_chance",
move_effect_id="move_effect_id",
move_id="move_id",
power="power",
pp="pp",
type_id="type_id",
version_group_id="version_group_id"
}

/**
* PokemonV2MovechangeSelectColumn
 *
 * select columns of table "pokemon_v2_movechange"
*/
export const PokemonV2MovechangeSelectColumnEnumType = types.enumeration("PokemonV2MovechangeSelectColumn", [
        "accuracy", // column name
  "id", // column name
  "move_effect_chance", // column name
  "move_effect_id", // column name
  "move_id", // column name
  "power", // column name
  "pp", // column name
  "type_id", // column name
  "version_group_id", // column name
      ])
