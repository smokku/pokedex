/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2RegionnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2RegionnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_stddev_pop_fields"), "pokemon_v2_regionname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameStddevPopFields() {
  return new PokemonV2RegionnameStddevPopFieldsModelSelector()
}

export const pokemonV2RegionnameStddevPopFieldsModelPrimitives = selectFromPokemonV2RegionnameStddevPopFields().language_id.region_id
