/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterslotMinFieldsBase
 * auto generated base class for the model PokemonV2EncounterslotMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterslotMinFieldsModelBase = ModelBase
  .named('PokemonV2EncounterslotMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterslot_min_fields"), "pokemon_v2_encounterslot_min_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    rarity: types.union(types.undefined, types.null, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterslotMinFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get rarity() { return this.__attr(`rarity`) }
  get slot() { return this.__attr(`slot`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2EncounterslotMinFields() {
  return new PokemonV2EncounterslotMinFieldsModelSelector()
}

export const pokemonV2EncounterslotMinFieldsModelPrimitives = selectFromPokemonV2EncounterslotMinFields().encounter_method_id.rarity.slot.version_group_id
