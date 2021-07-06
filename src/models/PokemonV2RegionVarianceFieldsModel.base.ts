/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionVarianceFieldsBase
 * auto generated base class for the model PokemonV2RegionVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2RegionVarianceFieldsModelBase = ModelBase
  .named('PokemonV2RegionVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_variance_fields"), "pokemon_v2_region_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2RegionVarianceFields() {
  return new PokemonV2RegionVarianceFieldsModelSelector()
}

export const pokemonV2RegionVarianceFieldsModelPrimitives = selectFromPokemonV2RegionVarianceFields()
