/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodModel, PokemonV2EncountermethodModelType } from "./PokemonV2EncountermethodModel"
import { PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateModel.
 *
 * columns and relationships of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateModelBase = ModelBase
  .named('PokemonV2Locationareaencounterrate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate"), "pokemon_v2_locationareaencounterrate"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_encountermethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodModel)),
    /** An object relationship */
    pokemon_v2_locationarea: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    rate: types.union(types.undefined, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaencounterrateModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get rate() { return this.__attr(`rate`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_encountermethod(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_locationarea(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Locationareaencounterrate() {
  return new PokemonV2LocationareaencounterrateModelSelector()
}

export const pokemonV2LocationareaencounterrateModelPrimitives = selectFromPokemonV2Locationareaencounterrate().encounter_method_id.location_area_id.rate.version_id
