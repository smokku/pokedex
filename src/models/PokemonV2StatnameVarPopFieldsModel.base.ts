/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2StatnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2StatnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2StatnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_var_pop_fields"), "pokemon_v2_statname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2StatnameVarPopFields() {
  return new PokemonV2StatnameVarPopFieldsModelSelector()
}

export const pokemonV2StatnameVarPopFieldsModelPrimitives = selectFromPokemonV2StatnameVarPopFields().language_id.stat_id
