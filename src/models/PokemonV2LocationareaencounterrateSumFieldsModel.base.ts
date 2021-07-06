/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateSumFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareaencounterrateSumFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_sum_fields"), "pokemon_v2_locationareaencounterrate_sum_fields"),
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

export class PokemonV2LocationareaencounterrateSumFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2LocationareaencounterrateSumFields() {
  return new PokemonV2LocationareaencounterrateSumFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateSumFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateSumFields().encounter_method_id.location_area_id.rate.version_id
