/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2AbilitychangeeffecttextAggregateModel, PokemonV2AbilitychangeeffecttextAggregateModelType } from "./PokemonV2AbilitychangeeffecttextAggregateModel"
import { PokemonV2AbilitychangeeffecttextAggregateModelSelector } from "./PokemonV2AbilitychangeeffecttextAggregateModel.base"
import { PokemonV2AbilitychangeeffecttextModel, PokemonV2AbilitychangeeffecttextModelType } from "./PokemonV2AbilitychangeeffecttextModel"
import { PokemonV2AbilitychangeeffecttextModelSelector } from "./PokemonV2AbilitychangeeffecttextModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeBase
 * auto generated base class for the model PokemonV2AbilitychangeModel.
 *
 * columns and relationships of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeModelBase = ModelBase
  .named('PokemonV2Abilitychange')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange"), "pokemon_v2_abilitychange"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_ability: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** An array relationship */
    pokemon_v2_abilitychangeeffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeeffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_abilitychangeeffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2AbilitychangeeffecttextAggregateModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttexts(builder?: string | PokemonV2AbilitychangeeffecttextModelSelector | ((selector: PokemonV2AbilitychangeeffecttextModelSelector) => PokemonV2AbilitychangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttexts`, PokemonV2AbilitychangeeffecttextModelSelector, builder) }
  pokemon_v2_abilitychangeeffecttexts_aggregate(builder?: string | PokemonV2AbilitychangeeffecttextAggregateModelSelector | ((selector: PokemonV2AbilitychangeeffecttextAggregateModelSelector) => PokemonV2AbilitychangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_abilitychangeeffecttexts_aggregate`, PokemonV2AbilitychangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Abilitychange() {
  return new PokemonV2AbilitychangeModelSelector()
}

export const pokemonV2AbilitychangeModelPrimitives = selectFromPokemonV2Abilitychange().ability_id.version_group_id
