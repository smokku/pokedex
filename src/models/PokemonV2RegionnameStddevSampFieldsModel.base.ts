/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2RegionnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2RegionnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_stddev_samp_fields"), "pokemon_v2_regionname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameStddevSampFields() {
  return new PokemonV2RegionnameStddevSampFieldsModelSelector()
}

export const pokemonV2RegionnameStddevSampFieldsModelPrimitives = selectFromPokemonV2RegionnameStddevSampFields().language_id.region_id
