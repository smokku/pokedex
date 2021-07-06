/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MoveSelectColumn {
  accuracy="accuracy",
contest_effect_id="contest_effect_id",
contest_type_id="contest_type_id",
generation_id="generation_id",
id="id",
move_damage_class_id="move_damage_class_id",
move_effect_chance="move_effect_chance",
move_effect_id="move_effect_id",
move_target_id="move_target_id",
name="name",
power="power",
pp="pp",
priority="priority",
super_contest_effect_id="super_contest_effect_id",
type_id="type_id"
}

/**
* PokemonV2MoveSelectColumn
 *
 * select columns of table "pokemon_v2_move"
*/
export const PokemonV2MoveSelectColumnEnumType = types.enumeration("PokemonV2MoveSelectColumn", [
        "accuracy", // column name
  "contest_effect_id", // column name
  "contest_type_id", // column name
  "generation_id", // column name
  "id", // column name
  "move_damage_class_id", // column name
  "move_effect_chance", // column name
  "move_effect_id", // column name
  "move_target_id", // column name
  "name", // column name
  "power", // column name
  "pp", // column name
  "priority", // column name
  "super_contest_effect_id", // column name
  "type_id", // column name
      ])
