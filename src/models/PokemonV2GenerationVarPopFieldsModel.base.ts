/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationVarPopFieldsBase
 * auto generated base class for the model PokemonV2GenerationVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GenerationVarPopFieldsModelBase = ModelBase
  .named('PokemonV2GenerationVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_var_pop_fields"), "pokemon_v2_generation_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2GenerationVarPopFields() {
  return new PokemonV2GenerationVarPopFieldsModelSelector()
}

export const pokemonV2GenerationVarPopFieldsModelPrimitives = selectFromPokemonV2GenerationVarPopFields().region_id
