/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvaluemapAggregateModel, PokemonV2EncounterconditionvaluemapAggregateModelType } from "./PokemonV2EncounterconditionvaluemapAggregateModel"
import { PokemonV2EncounterconditionvaluemapAggregateModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateModel.base"
import { PokemonV2EncounterconditionvaluemapModel, PokemonV2EncounterconditionvaluemapModelType } from "./PokemonV2EncounterconditionvaluemapModel"
import { PokemonV2EncounterconditionvaluemapModelSelector } from "./PokemonV2EncounterconditionvaluemapModel.base"
import { PokemonV2EncounterslotModel, PokemonV2EncounterslotModelType } from "./PokemonV2EncounterslotModel"
import { PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterBase
 * auto generated base class for the model PokemonV2EncounterModel.
 *
 * columns and relationships of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterModelBase = ModelBase
  .named('PokemonV2Encounter')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounter"), "pokemon_v2_encounter"),
    encounter_slot_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    max_level: types.union(types.undefined, types.integer),
    min_level: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An array relationship */
    pokemon_v2_encounterconditionvaluemaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluemapModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterconditionvaluemaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvaluemapAggregateModel)),
    /** An object relationship */
    pokemon_v2_encounterslot: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotModel)),
    /** An object relationship */
    pokemon_v2_locationarea: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaModel)),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterModelSelector extends QueryBuilder {
  get encounter_slot_id() { return this.__attr(`encounter_slot_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get max_level() { return this.__attr(`max_level`) }
  get min_level() { return this.__attr(`min_level`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_encounterconditionvaluemaps(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemaps`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemaps_aggregate(builder?: string | PokemonV2EncounterconditionvaluemapAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAggregateModelSelector) => PokemonV2EncounterconditionvaluemapAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemaps_aggregate`, PokemonV2EncounterconditionvaluemapAggregateModelSelector, builder) }
  pokemon_v2_encounterslot(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`pokemon_v2_encounterslot`, PokemonV2EncounterslotModelSelector, builder) }
  pokemon_v2_locationarea(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Encounter() {
  return new PokemonV2EncounterModelSelector()
}

export const pokemonV2EncounterModelPrimitives = selectFromPokemonV2Encounter().encounter_slot_id.location_area_id.max_level.min_level.pokemon_id.version_id
