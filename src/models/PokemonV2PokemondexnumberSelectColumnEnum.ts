/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemondexnumberSelectColumn {
  id="id",
pokedex_id="pokedex_id",
pokedex_number="pokedex_number",
pokemon_species_id="pokemon_species_id"
}

/**
* PokemonV2PokemondexnumberSelectColumn
 *
 * select columns of table "pokemon_v2_pokemondexnumber"
*/
export const PokemonV2PokemondexnumberSelectColumnEnumType = types.enumeration("PokemonV2PokemondexnumberSelectColumn", [
        "id", // column name
  "pokedex_id", // column name
  "pokedex_number", // column name
  "pokemon_species_id", // column name
      ])
