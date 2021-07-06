/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2ItemSelectColumn {
  cost="cost",
fling_power="fling_power",
id="id",
item_category_id="item_category_id",
item_fling_effect_id="item_fling_effect_id",
name="name"
}

/**
* PokemonV2ItemSelectColumn
 *
 * select columns of table "pokemon_v2_item"
*/
export const PokemonV2ItemSelectColumnEnumType = types.enumeration("PokemonV2ItemSelectColumn", [
        "cost", // column name
  "fling_power", // column name
  "id", // column name
  "item_category_id", // column name
  "item_fling_effect_id", // column name
  "name", // column name
      ])
