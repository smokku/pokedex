/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastSumFieldsBase
 * auto generated base class for the model PokemonV2PokemontypepastSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemontypepastSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypepastSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_sum_fields"), "pokemon_v2_pokemontypepast_sum_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypepastSumFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2PokemontypepastSumFields() {
  return new PokemonV2PokemontypepastSumFieldsModelSelector()
}

export const pokemonV2PokemontypepastSumFieldsModelPrimitives = selectFromPokemonV2PokemontypepastSumFields().generation_id.pokemon_id.slot.type_id
