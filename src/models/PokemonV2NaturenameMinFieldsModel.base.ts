/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameMinFieldsBase
 * auto generated base class for the model PokemonV2NaturenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2NaturenameMinFieldsModelBase = ModelBase
  .named('PokemonV2NaturenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_min_fields"), "pokemon_v2_naturename_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    nature_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturenameMinFields() {
  return new PokemonV2NaturenameMinFieldsModelSelector()
}

export const pokemonV2NaturenameMinFieldsModelPrimitives = selectFromPokemonV2NaturenameMinFields().language_id.name.nature_id
