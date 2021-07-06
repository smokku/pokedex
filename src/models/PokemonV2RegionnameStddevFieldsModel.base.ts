/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameStddevFieldsBase
 * auto generated base class for the model PokemonV2RegionnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2RegionnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_stddev_fields"), "pokemon_v2_regionname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameStddevFields() {
  return new PokemonV2RegionnameStddevFieldsModelSelector()
}

export const pokemonV2RegionnameStddevFieldsModelPrimitives = selectFromPokemonV2RegionnameStddevFields().language_id.region_id
