/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MovemetaSelectColumn {
  ailment_chance="ailment_chance",
crit_rate="crit_rate",
drain="drain",
flinch_chance="flinch_chance",
healing="healing",
id="id",
max_hits="max_hits",
max_turns="max_turns",
min_hits="min_hits",
min_turns="min_turns",
move_id="move_id",
move_meta_ailment_id="move_meta_ailment_id",
move_meta_category_id="move_meta_category_id",
stat_chance="stat_chance"
}

/**
* PokemonV2MovemetaSelectColumn
 *
 * select columns of table "pokemon_v2_movemeta"
*/
export const PokemonV2MovemetaSelectColumnEnumType = types.enumeration("PokemonV2MovemetaSelectColumn", [
        "ailment_chance", // column name
  "crit_rate", // column name
  "drain", // column name
  "flinch_chance", // column name
  "healing", // column name
  "id", // column name
  "max_hits", // column name
  "max_turns", // column name
  "min_hits", // column name
  "min_turns", // column name
  "move_id", // column name
  "move_meta_ailment_id", // column name
  "move_meta_category_id", // column name
  "stat_chance", // column name
      ])
