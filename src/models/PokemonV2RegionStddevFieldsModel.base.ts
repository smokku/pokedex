/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionStddevFieldsBase
 * auto generated base class for the model PokemonV2RegionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2RegionStddevFieldsModelBase = ModelBase
  .named('PokemonV2RegionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_stddev_fields"), "pokemon_v2_region_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2RegionStddevFields() {
  return new PokemonV2RegionStddevFieldsModelSelector()
}

export const pokemonV2RegionStddevFieldsModelPrimitives = selectFromPokemonV2RegionStddevFields()
