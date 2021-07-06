/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2MovelearnmethodModel, PokemonV2MovelearnmethodModelType } from "./PokemonV2MovelearnmethodModel"
import { PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonmoveBase
 * auto generated base class for the model PokemonV2PokemonmoveModel.
 *
 * columns and relationships of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveModelBase = ModelBase
  .named('PokemonV2Pokemonmove')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonmove"), "pokemon_v2_pokemonmove"),
    id: types.union(types.undefined, types.integer),
    level: types.union(types.undefined, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_movelearnmethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodModel)),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonmoveModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
  get move_id() { return this.__attr(`move_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_movelearnmethod(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod`, PokemonV2MovelearnmethodModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonmove() {
  return new PokemonV2PokemonmoveModelSelector()
}

export const pokemonV2PokemonmoveModelPrimitives = selectFromPokemonV2Pokemonmove().level.move_id.move_learn_method_id.order.pokemon_id.version_group_id
