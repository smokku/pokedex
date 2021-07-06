/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2ItemnameSelectColumn {
  id="id",
item_id="item_id",
language_id="language_id",
name="name"
}

/**
* PokemonV2ItemnameSelectColumn
 *
 * select columns of table "pokemon_v2_itemname"
*/
export const PokemonV2ItemnameSelectColumnEnumType = types.enumeration("PokemonV2ItemnameSelectColumn", [
        "id", // column name
  "item_id", // column name
  "language_id", // column name
  "name", // column name
      ])
