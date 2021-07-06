/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2AbilityflavortextSelectColumn {
  ability_id="ability_id",
flavor_text="flavor_text",
id="id",
language_id="language_id",
version_group_id="version_group_id"
}

/**
* PokemonV2AbilityflavortextSelectColumn
 *
 * select columns of table "pokemon_v2_abilityflavortext"
*/
export const PokemonV2AbilityflavortextSelectColumnEnumType = types.enumeration("PokemonV2AbilityflavortextSelectColumn", [
        "ability_id", // column name
  "flavor_text", // column name
  "id", // column name
  "language_id", // column name
  "version_group_id", // column name
      ])
