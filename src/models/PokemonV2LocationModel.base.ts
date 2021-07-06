/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareaAggregateModel, PokemonV2LocationareaAggregateModelType } from "./PokemonV2LocationareaAggregateModel"
import { PokemonV2LocationareaAggregateModelSelector } from "./PokemonV2LocationareaAggregateModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { PokemonV2LocationgameindexAggregateModel, PokemonV2LocationgameindexAggregateModelType } from "./PokemonV2LocationgameindexAggregateModel"
import { PokemonV2LocationgameindexAggregateModelSelector } from "./PokemonV2LocationgameindexAggregateModel.base"
import { PokemonV2LocationgameindexModel, PokemonV2LocationgameindexModelType } from "./PokemonV2LocationgameindexModel"
import { PokemonV2LocationgameindexModelSelector } from "./PokemonV2LocationgameindexModel.base"
import { PokemonV2LocationnameAggregateModel, PokemonV2LocationnameAggregateModelType } from "./PokemonV2LocationnameAggregateModel"
import { PokemonV2LocationnameAggregateModelSelector } from "./PokemonV2LocationnameAggregateModel.base"
import { PokemonV2LocationnameModel, PokemonV2LocationnameModelType } from "./PokemonV2LocationnameModel"
import { PokemonV2LocationnameModelSelector } from "./PokemonV2LocationnameModel.base"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationBase
 * auto generated base class for the model PokemonV2LocationModel.
 *
 * columns and relationships of "pokemon_v2_location"
 */
export const PokemonV2LocationModelBase = ModelBase
  .named('PokemonV2Location')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location"), "pokemon_v2_location"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_locationareas: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaModel))),
    /** An aggregate relationship */
    pokemon_v2_locationareas_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationareaAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationgameindices: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationgameindexModel))),
    /** An aggregate relationship */
    pokemon_v2_locationgameindices_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationgameindexAggregateModel)),
    /** An array relationship */
    pokemon_v2_locationnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationnameModel))),
    /** An aggregate relationship */
    pokemon_v2_locationnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2LocationnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** An object relationship */
    pokemon_v2_region: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionModel)),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
  pokemon_v2_locationareas(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationareas`, PokemonV2LocationareaModelSelector, builder) }
  pokemon_v2_locationareas_aggregate(builder?: string | PokemonV2LocationareaAggregateModelSelector | ((selector: PokemonV2LocationareaAggregateModelSelector) => PokemonV2LocationareaAggregateModelSelector)) { return this.__child(`pokemon_v2_locationareas_aggregate`, PokemonV2LocationareaAggregateModelSelector, builder) }
  pokemon_v2_locationgameindices(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`pokemon_v2_locationgameindices`, PokemonV2LocationgameindexModelSelector, builder) }
  pokemon_v2_locationgameindices_aggregate(builder?: string | PokemonV2LocationgameindexAggregateModelSelector | ((selector: PokemonV2LocationgameindexAggregateModelSelector) => PokemonV2LocationgameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_locationgameindices_aggregate`, PokemonV2LocationgameindexAggregateModelSelector, builder) }
  pokemon_v2_locationnames(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`pokemon_v2_locationnames`, PokemonV2LocationnameModelSelector, builder) }
  pokemon_v2_locationnames_aggregate(builder?: string | PokemonV2LocationnameAggregateModelSelector | ((selector: PokemonV2LocationnameAggregateModelSelector) => PokemonV2LocationnameAggregateModelSelector)) { return this.__child(`pokemon_v2_locationnames_aggregate`, PokemonV2LocationnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
}
export function selectFromPokemonV2Location() {
  return new PokemonV2LocationModelSelector()
}

export const pokemonV2LocationModelPrimitives = selectFromPokemonV2Location().name.region_id
