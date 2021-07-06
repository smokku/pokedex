/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MoveflavortextSelectColumn {
  flavor_text="flavor_text",
id="id",
language_id="language_id",
move_id="move_id",
version_group_id="version_group_id"
}

/**
* PokemonV2MoveflavortextSelectColumn
 *
 * select columns of table "pokemon_v2_moveflavortext"
*/
export const PokemonV2MoveflavortextSelectColumnEnumType = types.enumeration("PokemonV2MoveflavortextSelectColumn", [
        "flavor_text", // column name
  "id", // column name
  "language_id", // column name
  "move_id", // column name
  "version_group_id", // column name
      ])
