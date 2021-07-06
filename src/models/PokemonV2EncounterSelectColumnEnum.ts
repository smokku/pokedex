/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2EncounterSelectColumn {
  encounter_slot_id="encounter_slot_id",
id="id",
location_area_id="location_area_id",
max_level="max_level",
min_level="min_level",
pokemon_id="pokemon_id",
version_id="version_id"
}

/**
* PokemonV2EncounterSelectColumn
 *
 * select columns of table "pokemon_v2_encounter"
*/
export const PokemonV2EncounterSelectColumnEnumType = types.enumeration("PokemonV2EncounterSelectColumn", [
        "encounter_slot_id", // column name
  "id", // column name
  "location_area_id", // column name
  "max_level", // column name
  "min_level", // column name
  "pokemon_id", // column name
  "version_id", // column name
      ])
