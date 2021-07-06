/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationVarianceFieldsBase
 * auto generated base class for the model PokemonV2GenerationVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2GenerationVarianceFieldsModelBase = ModelBase
  .named('PokemonV2GenerationVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_variance_fields"), "pokemon_v2_generation_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2GenerationVarianceFields() {
  return new PokemonV2GenerationVarianceFieldsModelSelector()
}

export const pokemonV2GenerationVarianceFieldsModelPrimitives = selectFromPokemonV2GenerationVarianceFields().region_id
