/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateStddevSampFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GrowthrateStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_stddev_samp_fields"), "pokemon_v2_growthrate_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GrowthrateStddevSampFields() {
  return new PokemonV2GrowthrateStddevSampFieldsModelSelector()
}

export const pokemonV2GrowthrateStddevSampFieldsModelPrimitives = selectFromPokemonV2GrowthrateStddevSampFields()
