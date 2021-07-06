/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateVarSampFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareaencounterrateVarSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_var_samp_fields"), "pokemon_v2_locationareaencounterrate_var_samp_fields"),
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

export class PokemonV2LocationareaencounterrateVarSampFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2LocationareaencounterrateVarSampFields() {
  return new PokemonV2LocationareaencounterrateVarSampFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateVarSampFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateVarSampFields().encounter_method_id.location_area_id.rate.version_id
