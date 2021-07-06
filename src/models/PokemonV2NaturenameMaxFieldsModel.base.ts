/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameMaxFieldsBase
 * auto generated base class for the model PokemonV2NaturenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2NaturenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2NaturenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_max_fields"), "pokemon_v2_naturename_max_fields"),
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

export class PokemonV2NaturenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturenameMaxFields() {
  return new PokemonV2NaturenameMaxFieldsModelSelector()
}

export const pokemonV2NaturenameMaxFieldsModelPrimitives = selectFromPokemonV2NaturenameMaxFields().language_id.name.nature_id
