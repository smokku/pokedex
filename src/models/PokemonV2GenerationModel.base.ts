/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityAggregateModel, PokemonV2AbilityAggregateModelType } from "./PokemonV2AbilityAggregateModel"
import { PokemonV2AbilityAggregateModelSelector } from "./PokemonV2AbilityAggregateModel.base"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2GenerationnameAggregateModel, PokemonV2GenerationnameAggregateModelType } from "./PokemonV2GenerationnameAggregateModel"
import { PokemonV2GenerationnameAggregateModelSelector } from "./PokemonV2GenerationnameAggregateModel.base"
import { PokemonV2GenerationnameModel, PokemonV2GenerationnameModelType } from "./PokemonV2GenerationnameModel"
import { PokemonV2GenerationnameModelSelector } from "./PokemonV2GenerationnameModel.base"
import { PokemonV2ItemgameindexAggregateModel, PokemonV2ItemgameindexAggregateModelType } from "./PokemonV2ItemgameindexAggregateModel"
import { PokemonV2ItemgameindexAggregateModelSelector } from "./PokemonV2ItemgameindexAggregateModel.base"
import { PokemonV2ItemgameindexModel, PokemonV2ItemgameindexModelType } from "./PokemonV2ItemgameindexModel"
import { PokemonV2ItemgameindexModelSelector } from "./PokemonV2ItemgameindexModel.base"
import { PokemonV2LocationgameindexAggregateModel, PokemonV2LocationgameindexAggregateModelType } from "./PokemonV2LocationgameindexAggregateModel"
import { PokemonV2LocationgameindexAggregateModelSelector } from "./PokemonV2LocationgameindexAggregateModel.base"
import { PokemonV2LocationgameindexModel, PokemonV2LocationgameindexModelType } from "./PokemonV2LocationgameindexModel"
import { PokemonV2LocationgameindexModelSelector } from "./PokemonV2LocationgameindexModel.base"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2PokemonformgenerationAggregateModel, PokemonV2PokemonformgenerationAggregateModelType } from "./PokemonV2PokemonformgenerationAggregateModel"
import { PokemonV2PokemonformgenerationAggregateModelSelector } from "./PokemonV2PokemonformgenerationAggregateModel.base"
import { PokemonV2PokemonformgenerationModel, PokemonV2PokemonformgenerationModelType } from "./PokemonV2PokemonformgenerationModel"
import { PokemonV2PokemonformgenerationModelSelector } from "./PokemonV2PokemonformgenerationModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2PokemontypepastAggregateModel, PokemonV2PokemontypepastAggregateModelType } from "./PokemonV2PokemontypepastAggregateModel"
import { PokemonV2PokemontypepastAggregateModelSelector } from "./PokemonV2PokemontypepastAggregateModel.base"
import { PokemonV2PokemontypepastModel, PokemonV2PokemontypepastModelType } from "./PokemonV2PokemontypepastModel"
import { PokemonV2PokemontypepastModelSelector } from "./PokemonV2PokemontypepastModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { PokemonV2TypeAggregateModel, PokemonV2TypeAggregateModelType } from "./PokemonV2TypeAggregateModel"
import { PokemonV2TypeAggregateModelSelector } from "./PokemonV2TypeAggregateModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { PokemonV2TypegameindexAggregateModel, PokemonV2TypegameindexAggregateModelType } from "./PokemonV2TypegameindexAggregateModel"
import { PokemonV2TypegameindexAggregateModelSelector } from "./PokemonV2TypegameindexAggregateModel.base"
import { PokemonV2TypegameindexModel, PokemonV2TypegameindexModelType } from "./PokemonV2TypegameindexModel"
import { PokemonV2TypegameindexModelSelector } from "./PokemonV2TypegameindexModel.base"
import { PokemonV2VersiongroupAggregateModel, PokemonV2VersiongroupAggregateModelType } from "./PokemonV2VersiongroupAggregateModel"
import { PokemonV2VersiongroupAggregateModelSelector } from "./PokemonV2VersiongroupAggregateModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationBase
 * auto generated base class for the model PokemonV2GenerationModel.
 *
 * columns and relationships of "pokemon_v2_generation"
 */
export const PokemonV2GenerationModelBase = ModelBase
  .named('PokemonV2Generation')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation"), "pokemon_v2_generation"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_abilities: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityModel))),
    /** An aggregate relationship */
    pokemon_v2_abilities_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilityAggregateModel)),
    /** An array relationship */
    pokemon_v2_generationnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationnameModel))),
    /** An aggregate relationship */
    pokemon_v2_generationnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GenerationnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemgameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemgameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_itemgameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemgameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationgameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationgameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_locationgameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationgameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonformgenerations: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformgenerationModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonformgenerations_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonformgenerationAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemontypepasts: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypepastModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemontypepasts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemontypepastAggregateModel)),
    /** An object relationship */
    pokemon_v2_region: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionModel)),
    /** An array relationship */
    pokemon_v2_typegameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypegameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_typegameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypegameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_types: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeModel))),
    /** An aggregate relationship */
    pokemon_v2_types_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypeAggregateModel)),
    /** An array relationship */
    pokemon_v2_versiongroups: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupModel))),
    /** An aggregate relationship */
    pokemon_v2_versiongroups_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupAggregateModel)),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
  pokemon_v2_abilities(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_abilities`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_abilities_aggregate(builder?: string | PokemonV2AbilityAggregateModelSelector | ((selector: PokemonV2AbilityAggregateModelSelector) => PokemonV2AbilityAggregateModelSelector)) { return this.__child(`pokemon_v2_abilities_aggregate`, PokemonV2AbilityAggregateModelSelector, builder) }
  pokemon_v2_generationnames(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`pokemon_v2_generationnames`, PokemonV2GenerationnameModelSelector, builder) }
  pokemon_v2_generationnames_aggregate(builder?: string | PokemonV2GenerationnameAggregateModelSelector | ((selector: PokemonV2GenerationnameAggregateModelSelector) => PokemonV2GenerationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_generationnames_aggregate`, PokemonV2GenerationnameAggregateModelSelector, builder) }
  pokemon_v2_itemgameindices(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`pokemon_v2_itemgameindices`, PokemonV2ItemgameindexModelSelector, builder) }
  pokemon_v2_itemgameindices_aggregate(builder?: string | PokemonV2ItemgameindexAggregateModelSelector | ((selector: PokemonV2ItemgameindexAggregateModelSelector) => PokemonV2ItemgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_itemgameindices_aggregate`, PokemonV2ItemgameindexAggregateModelSelector, builder) }
  pokemon_v2_locationgameindices(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindices`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationgameindices_aggregate(builder?: string | PokemonV2LocationgameindexAggregateModelSelector | ((selector: PokemonV2LocationgameindexAggregateModelSelector) => PokemonV2LocationgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_locationgameindices_aggregate`, PokemonV2LocationgameindexAggregateModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_pokemonformgenerations(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`pokemon_v2_pokemonformgenerations`, PokemonV2PokemonformgenerationModelSelector, builder) }
  pokemon_v2_pokemonformgenerations_aggregate(builder?: string | PokemonV2PokemonformgenerationAggregateModelSelector | ((selector: PokemonV2PokemonformgenerationAggregateModelSelector) => PokemonV2PokemonformgenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformgenerations_aggregate`, PokemonV2PokemonformgenerationAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
  pokemon_v2_pokemontypepasts(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_pokemontypepasts_aggregate(builder?: string | PokemonV2PokemontypepastAggregateModelSelector | ((selector: PokemonV2PokemontypepastAggregateModelSelector) => PokemonV2PokemontypepastAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts_aggregate`, PokemonV2PokemontypepastAggregateModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
  pokemon_v2_typegameindices(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindices`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typegameindices_aggregate(builder?: string | PokemonV2TypegameindexAggregateModelSelector | ((selector: PokemonV2TypegameindexAggregateModelSelector) => PokemonV2TypegameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_typegameindices_aggregate`, PokemonV2TypegameindexAggregateModelSelector, builder) }
  pokemon_v2_types(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_types`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_types_aggregate(builder?: string | PokemonV2TypeAggregateModelSelector | ((selector: PokemonV2TypeAggregateModelSelector) => PokemonV2TypeAggregateModelSelector)) { return this.__child(`pokemon_v2_types_aggregate`, PokemonV2TypeAggregateModelSelector, builder) }
  pokemon_v2_versiongroups(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroups`, PokemonV2VersiongroupModelSelector, builder) }
  pokemon_v2_versiongroups_aggregate(builder?: string | PokemonV2VersiongroupAggregateModelSelector | ((selector: PokemonV2VersiongroupAggregateModelSelector) => PokemonV2VersiongroupAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroups_aggregate`, PokemonV2VersiongroupAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Generation() {
  return new PokemonV2GenerationModelSelector()
}

export const pokemonV2GenerationModelPrimitives = selectFromPokemonV2Generation().name.region_id
