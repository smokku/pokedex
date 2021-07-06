/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameMaxFieldsBase
 * auto generated base class for the model PokemonV2StatnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2StatnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2StatnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_max_fields"), "pokemon_v2_statname_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2StatnameMaxFields() {
  return new PokemonV2StatnameMaxFieldsModelSelector()
}

export const pokemonV2StatnameMaxFieldsModelPrimitives = selectFromPokemonV2StatnameMaxFields().language_id.name.stat_id
