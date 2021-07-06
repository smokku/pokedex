/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2StatSelectColumn {
  game_index="game_index",
id="id",
is_battle_only="is_battle_only",
move_damage_class_id="move_damage_class_id",
name="name"
}

/**
* PokemonV2StatSelectColumn
 *
 * select columns of table "pokemon_v2_stat"
*/
export const PokemonV2StatSelectColumnEnumType = types.enumeration("PokemonV2StatSelectColumn", [
        "game_index", // column name
  "id", // column name
  "is_battle_only", // column name
  "move_damage_class_id", // column name
  "name", // column name
      ])
