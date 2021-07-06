/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovetargetnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovetargetnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_max_fields"), "pokemon_v2_movetargetname_max_fields"),
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

export class PokemonV2MovetargetnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovetargetnameMaxFields() {
  return new PokemonV2MovetargetnameMaxFieldsModelSelector()
}

export const pokemonV2MovetargetnameMaxFieldsModelPrimitives = selectFromPokemonV2MovetargetnameMaxFields().language_id.move_target_id.name
