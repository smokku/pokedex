/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateVarPopFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GrowthrateVarPopFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_var_pop_fields"), "pokemon_v2_growthrate_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GrowthrateVarPopFields() {
  return new PokemonV2GrowthrateVarPopFieldsModelSelector()
}

export const pokemonV2GrowthrateVarPopFieldsModelPrimitives = selectFromPokemonV2GrowthrateVarPopFields()
