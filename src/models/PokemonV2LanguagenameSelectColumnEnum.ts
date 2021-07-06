/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2LanguagenameSelectColumn {
  id="id",
language_id="language_id",
local_language_id="local_language_id",
name="name"
}

/**
* PokemonV2LanguagenameSelectColumn
 *
 * select columns of table "pokemon_v2_languagename"
*/
export const PokemonV2LanguagenameSelectColumnEnumType = types.enumeration("PokemonV2LanguagenameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "local_language_id", // column name
  "name", // column name
      ])
