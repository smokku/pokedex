/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonmoveStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonmoveStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonmoveStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonmoveStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonmove_stddev_pop_fields"), "pokemon_v2_pokemonmove_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    level: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonmoveStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get level() { return this.__attr(`level`) }
  get move_id() { return this.__attr(`move_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get order() { return this.__attr(`order`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2PokemonmoveStddevPopFields() {
  return new PokemonV2PokemonmoveStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonmoveStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonmoveStddevPopFields().level.move_id.move_learn_method_id.order.pokemon_id.version_group_id
