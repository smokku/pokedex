/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateStddevPopFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationareaencounterrateStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_stddev_pop_fields"), "pokemon_v2_locationareaencounterrate_stddev_pop_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
    rate: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2LocationareaencounterrateStddevPopFields() {
  return new PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateStddevPopFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateStddevPopFields().encounter_method_id.location_area_id.rate.version_id
