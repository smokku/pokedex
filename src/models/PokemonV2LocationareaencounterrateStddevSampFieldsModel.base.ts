/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationareaencounterrateStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_stddev_samp_fields"), "pokemon_v2_locationareaencounterrate_stddev_samp_fields"),
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

export class PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2LocationareaencounterrateStddevSampFields() {
  return new PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateStddevSampFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateStddevSampFields().encounter_method_id.location_area_id.rate.version_id
