/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationVarSampFieldsBase
 * auto generated base class for the model PokemonV2GenerationVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GenerationVarSampFieldsModelBase = ModelBase
  .named('PokemonV2GenerationVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_var_samp_fields"), "pokemon_v2_generation_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2GenerationVarSampFields() {
  return new PokemonV2GenerationVarSampFieldsModelSelector()
}

export const pokemonV2GenerationVarSampFieldsModelPrimitives = selectFromPokemonV2GenerationVarSampFields().region_id
