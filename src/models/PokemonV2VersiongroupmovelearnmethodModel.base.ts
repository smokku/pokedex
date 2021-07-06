/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethodModel, PokemonV2MovelearnmethodModelType } from "./PokemonV2MovelearnmethodModel"
import { PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodModel.
 *
 * columns and relationships of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodModelBase = ModelBase
  .named('PokemonV2Versiongroupmovelearnmethod')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod"), "pokemon_v2_versiongroupmovelearnmethod"),
    id: types.union(types.undefined, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_movelearnmethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_movelearnmethod(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Versiongroupmovelearnmethod() {
  return new PokemonV2VersiongroupmovelearnmethodModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodModelPrimitives = selectFromPokemonV2Versiongroupmovelearnmethod().move_learn_method_id.version_group_id
