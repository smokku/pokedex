/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationStddevFieldsBase
 * auto generated base class for the model PokemonV2LocationStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationStddevFieldsModelBase = ModelBase
  .named('PokemonV2LocationStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_stddev_fields"), "pokemon_v2_location_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationStddevFields() {
  return new PokemonV2LocationStddevFieldsModelSelector()
}

export const pokemonV2LocationStddevFieldsModelPrimitives = selectFromPokemonV2LocationStddevFields().region_id
