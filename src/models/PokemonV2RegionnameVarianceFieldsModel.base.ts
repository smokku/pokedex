/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2RegionnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2RegionnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_variance_fields"), "pokemon_v2_regionname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameVarianceFields() {
  return new PokemonV2RegionnameVarianceFieldsModelSelector()
}

export const pokemonV2RegionnameVarianceFieldsModelPrimitives = selectFromPokemonV2RegionnameVarianceFields().language_id.region_id
