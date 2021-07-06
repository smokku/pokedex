/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainVarPopFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EvolutionchainVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_var_pop_fields"), "pokemon_v2_evolutionchain_var_pop_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainVarPopFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainVarPopFields() {
  return new PokemonV2EvolutionchainVarPopFieldsModelSelector()
}

export const pokemonV2EvolutionchainVarPopFieldsModelPrimitives = selectFromPokemonV2EvolutionchainVarPopFields().baby_trigger_item_id
