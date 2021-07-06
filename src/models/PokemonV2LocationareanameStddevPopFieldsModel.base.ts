/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationareanameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_stddev_pop_fields"), "pokemon_v2_locationareaname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameStddevPopFields() {
  return new PokemonV2LocationareanameStddevPopFieldsModelSelector()
}

export const pokemonV2LocationareanameStddevPopFieldsModelPrimitives = selectFromPokemonV2LocationareanameStddevPopFields().language_id.location_area_id
