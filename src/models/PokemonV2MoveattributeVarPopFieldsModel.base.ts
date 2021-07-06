/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeVarPopFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributeVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_var_pop_fields"), "pokemon_v2_moveattribute_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveattributeVarPopFields() {
  return new PokemonV2MoveattributeVarPopFieldsModelSelector()
}

export const pokemonV2MoveattributeVarPopFieldsModelPrimitives = selectFromPokemonV2MoveattributeVarPopFields()
