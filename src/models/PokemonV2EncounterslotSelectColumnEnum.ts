/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2EncounterslotSelectColumn {
  encounter_method_id="encounter_method_id",
id="id",
rarity="rarity",
slot="slot",
version_group_id="version_group_id"
}

/**
* PokemonV2EncounterslotSelectColumn
 *
 * select columns of table "pokemon_v2_encounterslot"
*/
export const PokemonV2EncounterslotSelectColumnEnumType = types.enumeration("PokemonV2EncounterslotSelectColumn", [
        "encounter_method_id", // column name
  "id", // column name
  "rarity", // column name
  "slot", // column name
  "version_group_id", // column name
      ])
