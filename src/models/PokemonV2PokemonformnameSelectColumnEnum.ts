/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PokemonV2PokemonformnameSelectColumn {
  id="id",
language_id="language_id",
name="name",
pokemon_form_id="pokemon_form_id",
pokemon_name="pokemon_name"
}

/**
* PokemonV2PokemonformnameSelectColumn
 *
 * select columns of table "pokemon_v2_pokemonformname"
*/
export const PokemonV2PokemonformnameSelectColumnEnumType = types.enumeration("PokemonV2PokemonformnameSelectColumn", [
        "id", // column name
  "language_id", // column name
  "name", // column name
  "pokemon_form_id", // column name
  "pokemon_name", // column name
      ])
