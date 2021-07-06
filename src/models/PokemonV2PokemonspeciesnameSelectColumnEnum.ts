/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonspeciesnameSelectColumn {
  genus="genus",
id="id",
language_id="language_id",
name="name",
pokemon_species_id="pokemon_species_id"
}

/**
* PokemonV2PokemonspeciesnameSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonspeciesname"
*/
export const PokemonV2PokemonspeciesnameSelectColumnEnumType = types.enumeration("PokemonV2PokemonspeciesnameSelectColumn", [
        "genus", // column name
  "id", // column name
  "language_id", // column name
  "name", // column name
  "pokemon_species_id", // column name
      ])
