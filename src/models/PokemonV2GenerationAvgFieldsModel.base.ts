/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationAvgFieldsBase
 * auto generated base class for the model PokemonV2GenerationAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2GenerationAvgFieldsModelBase = ModelBase
  .named('PokemonV2GenerationAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_avg_fields"), "pokemon_v2_generation_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2GenerationAvgFields() {
  return new PokemonV2GenerationAvgFieldsModelSelector()
}

export const pokemonV2GenerationAvgFieldsModelPrimitives = selectFromPokemonV2GenerationAvgFields().region_id
