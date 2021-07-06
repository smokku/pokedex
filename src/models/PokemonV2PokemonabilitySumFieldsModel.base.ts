/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilitySumFieldsBase
 * auto generated base class for the model PokemonV2PokemonabilitySumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonabilitySumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonabilitySumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability_sum_fields"), "pokemon_v2_pokemonability_sum_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonabilitySumFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
}
export function selectFromPokemonV2PokemonabilitySumFields() {
  return new PokemonV2PokemonabilitySumFieldsModelSelector()
}

export const pokemonV2PokemonabilitySumFieldsModelPrimitives = selectFromPokemonV2PokemonabilitySumFields().ability_id.pokemon_id.slot
