/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameMinFieldsBase
 * auto generated base class for the model PokemonV2MovenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovenameMinFieldsModelBase = ModelBase
  .named('PokemonV2MovenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_min_fields"), "pokemon_v2_movename_min_fields"),
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

export class PokemonV2MovenameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovenameMinFields() {
  return new PokemonV2MovenameMinFieldsModelSelector()
}

export const pokemonV2MovenameMinFieldsModelPrimitives = selectFromPokemonV2MovenameMinFields().language_id.move_id.name
