/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2NatureSelectColumn {
  decreased_stat_id="decreased_stat_id",
game_index="game_index",
hates_flavor_id="hates_flavor_id",
id="id",
increased_stat_id="increased_stat_id",
likes_flavor_id="likes_flavor_id",
name="name"
}

/**
* PokemonV2NatureSelectColumn
 *
 * select columns of table "pokemon_v2_nature"
*/
export const PokemonV2NatureSelectColumnEnumType = types.enumeration("PokemonV2NatureSelectColumn", [
        "decreased_stat_id", // column name
  "game_index", // column name
  "hates_flavor_id", // column name
  "id", // column name
  "increased_stat_id", // column name
  "likes_flavor_id", // column name
  "name", // column name
      ])
