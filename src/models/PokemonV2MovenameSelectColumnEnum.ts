/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MovenameSelectColumn {
  id="id",
language_id="language_id",
move_id="move_id",
name="name"
}

/**
* PokemonV2MovenameSelectColumn
 *
 * select columns of table "pokemon_v2_movename"
*/
export const PokemonV2MovenameSelectColumnEnumType = types.enumeration("PokemonV2MovenameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "move_id", // column name
  "name", // column name
      ])
