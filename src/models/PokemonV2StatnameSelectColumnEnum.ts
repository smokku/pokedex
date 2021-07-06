/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2StatnameSelectColumn {
  id="id",
language_id="language_id",
name="name",
stat_id="stat_id"
}

/**
* PokemonV2StatnameSelectColumn
 *
 * select columns of table "pokemon_v2_statname"
*/
export const PokemonV2StatnameSelectColumnEnumType = types.enumeration("PokemonV2StatnameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "stat_id", // column name
      ])
