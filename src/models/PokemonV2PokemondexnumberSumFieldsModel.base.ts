/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberSumFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemondexnumberSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_sum_fields"), "pokemon_v2_pokemondexnumber_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    pokedex_number: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemondexnumberSumFields() {
  return new PokemonV2PokemondexnumberSumFieldsModelSelector()
}

export const pokemonV2PokemondexnumberSumFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberSumFields().pokedex_id.pokedex_number.pokemon_species_id
