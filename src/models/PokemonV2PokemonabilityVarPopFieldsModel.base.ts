/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilityVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonabilityVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonabilityVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonabilityVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability_var_pop_fields"), "pokemon_v2_pokemonability_var_pop_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    slot: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonabilityVarPopFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
}
export function selectFromPokemonV2PokemonabilityVarPopFields() {
  return new PokemonV2PokemonabilityVarPopFieldsModelSelector()
}

export const pokemonV2PokemonabilityVarPopFieldsModelPrimitives = selectFromPokemonV2PokemonabilityVarPopFields().ability_id.pokemon_id.slot
