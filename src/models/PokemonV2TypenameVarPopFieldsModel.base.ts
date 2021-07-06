/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameVarPopFieldsBase
 * auto generated base class for the model PokemonV2TypenameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2TypenameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2TypenameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_var_pop_fields"), "pokemon_v2_typename_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameVarPopFields() {
  return new PokemonV2TypenameVarPopFieldsModelSelector()
}

export const pokemonV2TypenameVarPopFieldsModelPrimitives = selectFromPokemonV2TypenameVarPopFields().language_id.type_id
