/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameMaxFieldsBase
 * auto generated base class for the model PokemonV2TypenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2TypenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2TypenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_max_fields"), "pokemon_v2_typename_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameMaxFields() {
  return new PokemonV2TypenameMaxFieldsModelSelector()
}

export const pokemonV2TypenameMaxFieldsModelPrimitives = selectFromPokemonV2TypenameMaxFields().language_id.name.type_id
