/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonmoveMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonmoveMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonmoveMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonmoveMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonmove_min_fields"), "pokemon_v2_pokemonmove_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    level: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonmoveMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
  get move_id() { return this.__attr(`move_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonmoveMinFields() {
  return new PokemonV2PokemonmoveMinFieldsModelSelector()
}

export const pokemonV2PokemonmoveMinFieldsModelPrimitives = selectFromPokemonV2PokemonmoveMinFields().level.move_id.move_learn_method_id.order.pokemon_id.version_group_id
