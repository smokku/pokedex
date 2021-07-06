/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2NaturebattlestylepreferenceSelectColumn {
  high_hp_preference="high_hp_preference",
id="id",
low_hp_preference="low_hp_preference",
move_battle_style_id="move_battle_style_id",
nature_id="nature_id"
}

/**
* PokemonV2NaturebattlestylepreferenceSelectColumn
 *
 * select columns of table "pokemon_v2_naturebattlestylepreference"
*/
export const PokemonV2NaturebattlestylepreferenceSelectColumnEnumType = types.enumeration("PokemonV2NaturebattlestylepreferenceSelectColumn", [
        "high_hp_preference", // column name
  "id", // column name
  "low_hp_preference", // column name
  "move_battle_style_id", // column name
  "nature_id", // column name
      ])
