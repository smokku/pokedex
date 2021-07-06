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
import { PokemonV2LocationareaencounterrateAggregateModel, PokemonV2LocationareaencounterrateAggregateModelType } from "./PokemonV2LocationareaencounterrateAggregateModel"
import { PokemonV2LocationareaencounterrateAggregateModelSelector } from "./PokemonV2LocationareaencounterrateAggregateModel.base"
import { PokemonV2LocationareaencounterrateModel, PokemonV2LocationareaencounterrateModelType } from "./PokemonV2LocationareaencounterrateModel"
import { PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"
import { PokemonV2PokemongameindexAggregateModel, PokemonV2PokemongameindexAggregateModelType } from "./PokemonV2PokemongameindexAggregateModel"
import { PokemonV2PokemongameindexAggregateModelSelector } from "./PokemonV2PokemongameindexAggregateModel.base"
import { PokemonV2PokemongameindexModel, PokemonV2PokemongameindexModelType } from "./PokemonV2PokemongameindexModel"
import { PokemonV2PokemongameindexModelSelector } from "./PokemonV2PokemongameindexModel.base"
import { PokemonV2PokemonitemAggregateModel, PokemonV2PokemonitemAggregateModelType } from "./PokemonV2PokemonitemAggregateModel"
import { PokemonV2PokemonitemAggregateModelSelector } from "./PokemonV2PokemonitemAggregateModel.base"
import { PokemonV2PokemonitemModel, PokemonV2PokemonitemModelType } from "./PokemonV2PokemonitemModel"
import { PokemonV2PokemonitemModelSelector } from "./PokemonV2PokemonitemModel.base"
import { PokemonV2PokemonspeciesflavortextAggregateModel, PokemonV2PokemonspeciesflavortextAggregateModelType } from "./PokemonV2PokemonspeciesflavortextAggregateModel"
import { PokemonV2PokemonspeciesflavortextAggregateModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { PokemonV2VersionnameAggregateModel, PokemonV2VersionnameAggregateModelType } from "./PokemonV2VersionnameAggregateModel"
import { PokemonV2VersionnameAggregateModelSelector } from "./PokemonV2VersionnameAggregateModel.base"
import { PokemonV2VersionnameModel, PokemonV2VersionnameModelType } from "./PokemonV2VersionnameModel"
import { PokemonV2VersionnameModelSelector } from "./PokemonV2VersionnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionBase
 * auto generated base class for the model PokemonV2VersionModel.
 *
 * columns and relationships of "pokemon_v2_version"
 */
export const PokemonV2VersionModelBase = ModelBase
  .named('PokemonV2Version')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version"), "pokemon_v2_version"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_encounters: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterModel))),
    /** An aggregate relationship */
    pokemon_v2_encounters_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationareaencounterrates: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaencounterrateModel))),
    /** An aggregate relationship */
    pokemon_v2_locationareaencounterrates_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaencounterrateAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemongameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemongameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemongameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemongameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonitems: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonitemModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonitems_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonitemAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspeciesflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesflavortextAggregateModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    /** An array relationship */
    pokemon_v2_versionnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionnameModel))),
    /** An aggregate relationship */
    pokemon_v2_versionnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersionnameAggregateModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_encounters(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounters`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounters_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounters_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_locationareaencounterrates(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates`, PokemonV2LocationareaencounterrateModelSelector, builder) }
  pokemon_v2_locationareaencounterrates_aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateModelSelector) => PokemonV2LocationareaencounterrateAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareaencounterrates_aggregate`, PokemonV2LocationareaencounterrateAggregateModelSelector, builder) }
  pokemon_v2_pokemongameindices(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindices`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemongameindices_aggregate(builder?: string | PokemonV2PokemongameindexAggregateModelSelector | ((selector: PokemonV2PokemongameindexAggregateModelSelector) => PokemonV2PokemongameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemongameindices_aggregate`, PokemonV2PokemongameindexAggregateModelSelector, builder) }
  pokemon_v2_pokemonitems(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitems`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonitems_aggregate(builder?: string | PokemonV2PokemonitemAggregateModelSelector | ((selector: PokemonV2PokemonitemAggregateModelSelector) => PokemonV2PokemonitemAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonitems_aggregate`, PokemonV2PokemonitemAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortexts(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortexts`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortexts_aggregate(builder?: string | PokemonV2PokemonspeciesflavortextAggregateModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAggregateModelSelector) => PokemonV2PokemonspeciesflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortexts_aggregate`, PokemonV2PokemonspeciesflavortextAggregateModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versionnames(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`pokemon_v2_versionnames`, PokemonV2VersionnameModelSelector, builder) }
  pokemon_v2_versionnames_aggregate(builder?: string | PokemonV2VersionnameAggregateModelSelector | ((selector: PokemonV2VersionnameAggregateModelSelector) => PokemonV2VersionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_versionnames_aggregate`, PokemonV2VersionnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Version() {
  return new PokemonV2VersionModelSelector()
}

export const pokemonV2VersionModelPrimitives = selectFromPokemonV2Version().name.version_group_id
