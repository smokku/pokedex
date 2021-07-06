/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterAvgFieldsBase
 * auto generated base class for the model PokemonV2EncounterAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterAvgFieldsModelBase = ModelBase
  .named('PokemonV2EncounterAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounter_avg_fields"), "pokemon_v2_encounter_avg_fields"),
    encounter_slot_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
    max_level: types.union(types.undefined, types.null, types.number),
    min_level: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterAvgFieldsModelSelector extends QueryBuilder {
  get encounter_slot_id() { return this.__attr(`encounter_slot_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get max_level() { return this.__attr(`max_level`) }
  get min_level() { return this.__attr(`min_level`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2EncounterAvgFields() {
  return new PokemonV2EncounterAvgFieldsModelSelector()
}

export const pokemonV2EncounterAvgFieldsModelPrimitives = selectFromPokemonV2EncounterAvgFields().encounter_slot_id.location_area_id.max_level.min_level.pokemon_id.version_id
