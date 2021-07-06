/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2LanguageSelectColumn {
  id="id",
iso3166="iso3166",
iso639="iso639",
name="name",
official="official",
order="order"
}

/**
* PokemonV2LanguageSelectColumn
 *
 * select columns of table "pokemon_v2_language"
*/
export const PokemonV2LanguageSelectColumnEnumType = types.enumeration("PokemonV2LanguageSelectColumn", [
        "id", // column name
  "iso3166", // column name
  "iso639", // column name
  "name", // column name
  "official", // column name
  "order", // column name
      ])
