/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameStddevFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationareanameStddevFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_stddev_fields"), "pokemon_v2_locationareaname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameStddevFields() {
  return new PokemonV2LocationareanameStddevFieldsModelSelector()
}

export const pokemonV2LocationareanameStddevFieldsModelPrimitives = selectFromPokemonV2LocationareanameStddevFields().language_id.location_area_id
