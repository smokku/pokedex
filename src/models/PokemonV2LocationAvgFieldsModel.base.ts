/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationAvgFieldsBase
 * auto generated base class for the model PokemonV2LocationAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationAvgFieldsModelBase = ModelBase
  .named('PokemonV2LocationAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_avg_fields"), "pokemon_v2_location_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationAvgFields() {
  return new PokemonV2LocationAvgFieldsModelSelector()
}

export const pokemonV2LocationAvgFieldsModelPrimitives = selectFromPokemonV2LocationAvgFields().region_id
