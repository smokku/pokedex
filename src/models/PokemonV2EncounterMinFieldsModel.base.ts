/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounter_min_fields"), "pokemon_v2_encounter_min_fields"),
    encounter_slot_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    max_level: types.union(types.undefined, types.null, types.integer),
    min_level: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterMinFieldsModelSelector extends QueryBuilder {
  get encounter_slot_id() { return this.__attr(`encounter_slot_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get max_level() { return this.__attr(`max_level`) }
  get min_level() { return this.__attr(`min_level`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2EncounterMinFields() {
  return new PokemonV2EncounterMinFieldsModelSelector()
}

export const pokemonV2EncounterMinFieldsModelPrimitives = selectFromPokemonV2EncounterMinFields().encounter_slot_id.location_area_id.max_level.min_level.pokemon_id.version_id
