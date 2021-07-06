/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokeathlonstatVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_var_pop_fields"), "pokemon_v2_pokeathlonstat_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatVarPopFields() {
  return new PokemonV2PokeathlonstatVarPopFieldsModelSelector()
}

export const pokemonV2PokeathlonstatVarPopFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatVarPopFields()
