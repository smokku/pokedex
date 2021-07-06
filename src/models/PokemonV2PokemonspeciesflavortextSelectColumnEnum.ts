/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonspeciesflavortextSelectColumn {
  flavor_text="flavor_text",
id="id",
language_id="language_id",
pokemon_species_id="pokemon_species_id",
version_id="version_id"
}

/**
* PokemonV2PokemonspeciesflavortextSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonspeciesflavortext"
*/
export const PokemonV2PokemonspeciesflavortextSelectColumnEnumType = types.enumeration("PokemonV2PokemonspeciesflavortextSelectColumn", [
        "flavor_text", // column name
  "id", // column name
  "language_id", // column name
  "pokemon_species_id", // column name
  "version_id", // column name
      ])
