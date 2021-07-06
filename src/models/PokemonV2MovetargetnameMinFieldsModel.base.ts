/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameMinFieldsBase
 * auto generated base class for the model PokemonV2MovetargetnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovetargetnameMinFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_min_fields"), "pokemon_v2_movetargetname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_target_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovetargetnameMinFields() {
  return new PokemonV2MovetargetnameMinFieldsModelSelector()
}

export const pokemonV2MovetargetnameMinFieldsModelPrimitives = selectFromPokemonV2MovetargetnameMinFields().language_id.move_target_id.name
