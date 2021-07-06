/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2RegionnameSelectColumn {
  id="id",
language_id="language_id",
name="name",
region_id="region_id"
}

/**
* PokemonV2RegionnameSelectColumn
 *
 * select columns of table "pokemon_v2_regionname"
*/
export const PokemonV2RegionnameSelectColumnEnumType = types.enumeration("PokemonV2RegionnameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "region_id", // column name
      ])
