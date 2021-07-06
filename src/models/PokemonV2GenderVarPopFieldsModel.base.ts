/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderVarPopFieldsBase
 * auto generated base class for the model PokemonV2GenderVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GenderVarPopFieldsModelBase = ModelBase
  .named('PokemonV2GenderVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_var_pop_fields"), "pokemon_v2_gender_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderVarPopFields() {
  return new PokemonV2GenderVarPopFieldsModelSelector()
}

export const pokemonV2GenderVarPopFieldsModelPrimitives = selectFromPokemonV2GenderVarPopFields()
