/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemoncolorVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_var_pop_fields"), "pokemon_v2_pokemoncolor_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemoncolorVarPopFields() {
  return new PokemonV2PokemoncolorVarPopFieldsModelSelector()
}

export const pokemonV2PokemoncolorVarPopFieldsModelPrimitives = selectFromPokemonV2PokemoncolorVarPopFields()
