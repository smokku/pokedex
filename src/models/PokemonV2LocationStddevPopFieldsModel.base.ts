/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationStddevPopFieldsBase
 * auto generated base class for the model PokemonV2LocationStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_stddev_pop_fields"), "pokemon_v2_location_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationStddevPopFields() {
  return new PokemonV2LocationStddevPopFieldsModelSelector()
}

export const pokemonV2LocationStddevPopFieldsModelPrimitives = selectFromPokemonV2LocationStddevPopFields().region_id
