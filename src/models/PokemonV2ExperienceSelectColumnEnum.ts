/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2ExperienceSelectColumn {
  experience="experience",
growth_rate_id="growth_rate_id",
id="id",
level="level"
}

/**
* PokemonV2ExperienceSelectColumn
 *
 * select columns of table "pokemon_v2_experience"
*/
export const PokemonV2ExperienceSelectColumnEnumType = types.enumeration("PokemonV2ExperienceSelectColumn", [
        "experience", // column name
  "growth_rate_id", // column name
  "id", // column name
  "level", // column name
      ])
