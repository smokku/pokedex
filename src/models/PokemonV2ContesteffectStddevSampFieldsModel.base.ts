/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesteffectStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_stddev_samp_fields"), "pokemon_v2_contesteffect_stddev_samp_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    jam: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectStddevSampFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectStddevSampFields() {
  return new PokemonV2ContesteffectStddevSampFieldsModelSelector()
}

export const pokemonV2ContesteffectStddevSampFieldsModelPrimitives = selectFromPokemonV2ContesteffectStddevSampFields().appeal.jam
