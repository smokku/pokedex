/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationareanameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_stddev_samp_fields"), "pokemon_v2_locationareaname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameStddevSampFields() {
  return new PokemonV2LocationareanameStddevSampFieldsModelSelector()
}

export const pokemonV2LocationareanameStddevSampFieldsModelPrimitives = selectFromPokemonV2LocationareanameStddevSampFields().language_id.location_area_id
