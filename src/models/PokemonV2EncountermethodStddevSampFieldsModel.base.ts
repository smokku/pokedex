/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodStddevSampFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncountermethodStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_stddev_samp_fields"), "pokemon_v2_encountermethod_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodStddevSampFields() {
  return new PokemonV2EncountermethodStddevSampFieldsModelSelector()
}

export const pokemonV2EncountermethodStddevSampFieldsModelPrimitives = selectFromPokemonV2EncountermethodStddevSampFields().order
