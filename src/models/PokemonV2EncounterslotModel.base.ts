/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterAggregateModel, PokemonV2EncounterAggregateModelType } from "./PokemonV2EncounterAggregateModel"
import { PokemonV2EncounterAggregateModelSelector } from "./PokemonV2EncounterAggregateModel.base"
import { PokemonV2EncounterModel, PokemonV2EncounterModelType } from "./PokemonV2EncounterModel"
import { PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"
import { PokemonV2EncountermethodModel, PokemonV2EncountermethodModelType } from "./PokemonV2EncountermethodModel"
import { PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterslotBase
 * auto generated base class for the model PokemonV2EncounterslotModel.
 *
 * columns and relationships of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotModelBase = ModelBase
  .named('PokemonV2Encounterslot')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterslot"), "pokemon_v2_encounterslot"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_encountermethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodModel)),
    /** An array relationship */
    pokemon_v2_encounters: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterModel))),
    /** An aggregate relationship */
    pokemon_v2_encounters_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterAggregateModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    rarity: types.union(types.undefined, types.integer),
    slot: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterslotModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get rarity() { return this.__attr(`rarity`) }
  get slot() { return this.__attr(`slot`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_encountermethod(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_encounters(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounters`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounters_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounters_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Encounterslot() {
  return new PokemonV2EncounterslotModelSelector()
}

export const pokemonV2EncounterslotModelPrimitives = selectFromPokemonV2Encounterslot().encounter_method_id.rarity.slot.version_group_id
