/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterslotVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncounterslotVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterslotVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncounterslotVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterslot_variance_fields"), "pokemon_v2_encounterslot_variance_fields"),
    encounter_method_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    rarity: types.union(types.undefined, types.null, types.number),
    slot: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterslotVarianceFieldsModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get rarity() { return this.__attr(`rarity`) }
  get slot() { return this.__attr(`slot`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2EncounterslotVarianceFields() {
  return new PokemonV2EncounterslotVarianceFieldsModelSelector()
}

export const pokemonV2EncounterslotVarianceFieldsModelPrimitives = selectFromPokemonV2EncounterslotVarianceFields().encounter_method_id.rarity.slot.version_group_id
