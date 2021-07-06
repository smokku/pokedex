/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateMinFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareaencounterrateMinFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_min_fields"), "pokemon_v2_locationareaencounterrate_min_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    rate: types.union(types.undefined, types.null, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaencounterrateMinFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2LocationareaencounterrateMinFields() {
  return new PokemonV2LocationareaencounterrateMinFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateMinFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateMinFields().encounter_method_id.location_area_id.rate.version_id
