/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectModel, PokemonV2MoveeffectModelType } from "./PokemonV2MoveeffectModel"
import { PokemonV2MoveeffectModelSelector } from "./PokemonV2MoveeffectModel.base"
import { PokemonV2MoveeffectchangeeffecttextAggregateModel, PokemonV2MoveeffectchangeeffecttextAggregateModelType } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel"
import { PokemonV2MoveeffectchangeeffecttextAggregateModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel.base"
import { PokemonV2MoveeffectchangeeffecttextModel, PokemonV2MoveeffectchangeeffecttextModelType } from "./PokemonV2MoveeffectchangeeffecttextModel"
import { PokemonV2MoveeffectchangeeffecttextModelSelector } from "./PokemonV2MoveeffectchangeeffecttextModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeBase
 * auto generated base class for the model PokemonV2MoveeffectchangeModel.
 *
 * columns and relationships of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeModelBase = ModelBase
  .named('PokemonV2Moveeffectchange')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange"), "pokemon_v2_moveeffectchange"),
    id: types.union(types.undefined, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_moveeffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectModel)),
    /** An array relationship */
    pokemon_v2_moveeffectchangeeffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeeffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_moveeffectchangeeffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectchangeeffecttextAggregateModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_moveeffect(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect`, PokemonV2MoveeffectModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttexts(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttexts`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
  pokemon_v2_moveeffectchangeeffecttexts_aggregate(builder?: string | PokemonV2MoveeffectchangeeffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextAggregateModelSelector) => PokemonV2MoveeffectchangeeffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchangeeffecttexts_aggregate`, PokemonV2MoveeffectchangeeffecttextAggregateModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Moveeffectchange() {
  return new PokemonV2MoveeffectchangeModelSelector()
}

export const pokemonV2MoveeffectchangeModelPrimitives = selectFromPokemonV2Moveeffectchange().move_effect_id.version_group_id
