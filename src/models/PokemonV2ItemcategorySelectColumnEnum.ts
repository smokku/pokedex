/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2ItemcategorySelectColumn {
  id="id",
item_pocket_id="item_pocket_id",
name="name"
}

/**
* PokemonV2ItemcategorySelectColumn
 *
 * select columns of table "pokemon_v2_itemcategory"
*/
export const PokemonV2ItemcategorySelectColumnEnumType = types.enumeration("PokemonV2ItemcategorySelectColumn", [
        "id", // column name
  "item_pocket_id", // column name
  "name", // column name
      ])
