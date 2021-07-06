/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationStddevSampFieldsBase
 * auto generated base class for the model PokemonV2GenerationStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GenerationStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2GenerationStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_stddev_samp_fields"), "pokemon_v2_generation_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2GenerationStddevSampFields() {
  return new PokemonV2GenerationStddevSampFieldsModelSelector()
}

export const pokemonV2GenerationStddevSampFieldsModelPrimitives = selectFromPokemonV2GenerationStddevSampFields().region_id
