/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameSumFieldsBase
 * auto generated base class for the model PokemonV2RegionnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2RegionnameSumFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_sum_fields"), "pokemon_v2_regionname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameSumFields() {
  return new PokemonV2RegionnameSumFieldsModelSelector()
}

export const pokemonV2RegionnameSumFieldsModelPrimitives = selectFromPokemonV2RegionnameSumFields().language_id.region_id
