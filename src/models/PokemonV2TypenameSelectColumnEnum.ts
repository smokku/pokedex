/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2TypenameSelectColumn {
  id="id",
language_id="language_id",
name="name",
type_id="type_id"
}

/**
* PokemonV2TypenameSelectColumn
 *
 * select columns of table "pokemon_v2_typename"
*/
export const PokemonV2TypenameSelectColumnEnumType = types.enumeration("PokemonV2TypenameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "type_id", // column name
      ])
