/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectStddevSampFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2SupercontesteffectStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_stddev_samp_fields"), "pokemon_v2_supercontesteffect_stddev_samp_fields"),
    appeal: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectStddevSampFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectStddevSampFields() {
  return new PokemonV2SupercontesteffectStddevSampFieldsModelSelector()
}

export const pokemonV2SupercontesteffectStddevSampFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectStddevSampFields().appeal
