/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2RegionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2RegionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2RegionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_stddev_pop_fields"), "pokemon_v2_region_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2RegionStddevPopFields() {
  return new PokemonV2RegionStddevPopFieldsModelSelector()
}

export const pokemonV2RegionStddevPopFieldsModelPrimitives = selectFromPokemonV2RegionStddevPopFields()
