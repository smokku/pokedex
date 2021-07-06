/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilityMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonabilityMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonabilityMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonabilityMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability_min_fields"), "pokemon_v2_pokemonability_min_fields"),
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

export class PokemonV2PokemonabilityMinFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
}
export function selectFromPokemonV2PokemonabilityMinFields() {
  return new PokemonV2PokemonabilityMinFieldsModelSelector()
}

export const pokemonV2PokemonabilityMinFieldsModelPrimitives = selectFromPokemonV2PokemonabilityMinFields().ability_id.pokemon_id.slot
