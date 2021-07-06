/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2BerrySelectColumn {
  berry_firmness_id="berry_firmness_id",
growth_time="growth_time",
id="id",
item_id="item_id",
max_harvest="max_harvest",
name="name",
natural_gift_power="natural_gift_power",
natural_gift_type_id="natural_gift_type_id",
size="size",
smoothness="smoothness",
soil_dryness="soil_dryness"
}

/**
* PokemonV2BerrySelectColumn
 *
 * select columns of table "pokemon_v2_berry"
*/
export const PokemonV2BerrySelectColumnEnumType = types.enumeration("PokemonV2BerrySelectColumn", [
        "berry_firmness_id", // column name
  "growth_time", // column name
  "id", // column name
  "item_id", // column name
  "max_harvest", // column name
  "name", // column name
  "natural_gift_power", // column name
  "natural_gift_type_id", // column name
  "size", // column name
  "smoothness", // column name
  "soil_dryness", // column name
      ])
