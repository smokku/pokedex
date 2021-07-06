/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2MachineSelectColumn {
  growth_rate_id="growth_rate_id",
id="id",
item_id="item_id",
machine_number="machine_number",
move_id="move_id",
version_group_id="version_group_id"
}

/**
* PokemonV2MachineSelectColumn
 *
 * select columns of table "pokemon_v2_machine"
*/
export const PokemonV2MachineSelectColumnEnumType = types.enumeration("PokemonV2MachineSelectColumn", [
        "growth_rate_id", // column name
  "id", // column name
  "item_id", // column name
  "machine_number", // column name
  "move_id", // column name
  "version_group_id", // column name
      ])
