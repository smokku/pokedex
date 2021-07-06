/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_max_fields"), "pokemon_v2_movename_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovenameMaxFields() {
  return new PokemonV2MovenameMaxFieldsModelSelector()
}

export const pokemonV2MovenameMaxFieldsModelPrimitives = selectFromPokemonV2MovenameMaxFields().language_id.move_id.name
