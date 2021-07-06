/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2NaturenameSelectColumn {
  id="id",
language_id="language_id",
name="name",
nature_id="nature_id"
}

/**
* PokemonV2NaturenameSelectColumn
 *
 * select columns of table "pokemon_v2_naturename"
*/
export const PokemonV2NaturenameSelectColumnEnumType = types.enumeration("PokemonV2NaturenameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "nature_id", // column name
      ])
