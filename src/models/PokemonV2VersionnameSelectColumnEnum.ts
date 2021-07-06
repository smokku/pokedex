/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2VersionnameSelectColumn {
  id="id",
language_id="language_id",
name="name",
version_id="version_id"
}

/**
* PokemonV2VersionnameSelectColumn
 *
 * select columns of table "pokemon_v2_versionname"
*/
export const PokemonV2VersionnameSelectColumnEnumType = types.enumeration("PokemonV2VersionnameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "version_id", // column name
      ])
