/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationAggregateModel, PokemonV2GenerationAggregateModelType } from "./PokemonV2GenerationAggregateModel"
import { PokemonV2GenerationAggregateModelSelector } from "./PokemonV2GenerationAggregateModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2LocationAggregateModel, PokemonV2LocationAggregateModelType } from "./PokemonV2LocationAggregateModel"
import { PokemonV2LocationAggregateModelSelector } from "./PokemonV2LocationAggregateModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { PokemonV2PokedexAggregateModel, PokemonV2PokedexAggregateModelType } from "./PokemonV2PokedexAggregateModel"
import { PokemonV2PokedexAggregateModelSelector } from "./PokemonV2PokedexAggregateModel.base"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { PokemonV2RegionnameAggregateModel, PokemonV2RegionnameAggregateModelType } from "./PokemonV2RegionnameAggregateModel"
import { PokemonV2RegionnameAggregateModelSelector } from "./PokemonV2RegionnameAggregateModel.base"
import { PokemonV2RegionnameModel, PokemonV2RegionnameModelType } from "./PokemonV2RegionnameModel"
import { PokemonV2RegionnameModelSelector } from "./PokemonV2RegionnameModel.base"
import { PokemonV2VersiongroupregionAggregateModel, PokemonV2VersiongroupregionAggregateModelType } from "./PokemonV2VersiongroupregionAggregateModel"
import { PokemonV2VersiongroupregionAggregateModelSelector } from "./PokemonV2VersiongroupregionAggregateModel.base"
import { PokemonV2VersiongroupregionModel, PokemonV2VersiongroupregionModelType } from "./PokemonV2VersiongroupregionModel"
import { PokemonV2VersiongroupregionModelSelector } from "./PokemonV2VersiongroupregionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionBase
 * auto generated base class for the model PokemonV2RegionModel.
 *
 * columns and relationships of "pokemon_v2_region"
 */
export const PokemonV2RegionModelBase = ModelBase
  .named('PokemonV2Region')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region"), "pokemon_v2_region"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_generations: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationModel))),
    /** An aggregate relationship */
    pokemon_v2_generations_aggregate: types.union(types.undefined, types.late((): any => PokemonV2GenerationAggregateModel)),
    /** An array relationship */
    pokemon_v2_locations: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationModel))),
    /** An aggregate relationship */
    pokemon_v2_locations_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokedexes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexModel))),
    /** An aggregate relationship */
    pokemon_v2_pokedexes_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokedexAggregateModel)),
    /** An array relationship */
    pokemon_v2_regionnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2RegionnameModel))),
    /** An aggregate relationship */
    pokemon_v2_regionnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2RegionnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_versiongroupregions: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupregionModel))),
    /** An aggregate relationship */
    pokemon_v2_versiongroupregions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupregionAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_generations(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generations`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_generations_aggregate(builder?: string | PokemonV2GenerationAggregateModelSelector | ((selector: PokemonV2GenerationAggregateModelSelector) => PokemonV2GenerationAggregateModelSelector)) { return this.__child(`pokemon_v2_generations_aggregate`, PokemonV2GenerationAggregateModelSelector, builder) }
  pokemon_v2_locations(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_locations`, PokemonV2LocationModelSelector, builder) }
  pokemon_v2_locations_aggregate(builder?: string | PokemonV2LocationAggregateModelSelector | ((selector: PokemonV2LocationAggregateModelSelector) => PokemonV2LocationAggregateModelSelector)) { return this.__child(`pokemon_v2_locations_aggregate`, PokemonV2LocationAggregateModelSelector, builder) }
  pokemon_v2_pokedexes(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedexes`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokedexes_aggregate(builder?: string | PokemonV2PokedexAggregateModelSelector | ((selector: PokemonV2PokedexAggregateModelSelector) => PokemonV2PokedexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokedexes_aggregate`, PokemonV2PokedexAggregateModelSelector, builder) }
  pokemon_v2_regionnames(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`pokemon_v2_regionnames`, PokemonV2RegionnameModelSelector, builder) }
  pokemon_v2_regionnames_aggregate(builder?: string | PokemonV2RegionnameAggregateModelSelector | ((selector: PokemonV2RegionnameAggregateModelSelector) => PokemonV2RegionnameAggregateModelSelector)) { return this.__child(`pokemon_v2_regionnames_aggregate`, PokemonV2RegionnameAggregateModelSelector, builder) }
  pokemon_v2_versiongroupregions(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`pokemon_v2_versiongroupregions`, PokemonV2VersiongroupregionModelSelector, builder) }
  pokemon_v2_versiongroupregions_aggregate(builder?: string | PokemonV2VersiongroupregionAggregateModelSelector | ((selector: PokemonV2VersiongroupregionAggregateModelSelector) => PokemonV2VersiongroupregionAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupregions_aggregate`, PokemonV2VersiongroupregionAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Region() {
  return new PokemonV2RegionModelSelector()
}

export const pokemonV2RegionModelPrimitives = selectFromPokemonV2Region().name
