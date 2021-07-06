/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonSelectColumn {
  base_experience="base_experience",
height="height",
id="id",
is_default="is_default",
name="name",
order="order",
pokemon_species_id="pokemon_species_id",
weight="weight"
}

/**
* PokemonV2PokemonSelectColumn
 *
 * select columns of table "pokemon_v2_pokemon"
*/
export const PokemonV2PokemonSelectColumnEnumType = types.enumeration("PokemonV2PokemonSelectColumn", [
        "base_experience", // column name
  "height", // column name
  "id", // column name
  "is_default", // column name
  "name", // column name
  "order", // column name
  "pokemon_species_id", // column name
  "weight", // column name
      ])
