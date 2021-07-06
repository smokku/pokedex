/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentVarPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetaailmentVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_var_pop_fields"), "pokemon_v2_movemetaailment_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentVarPopFields() {
  return new PokemonV2MovemetaailmentVarPopFieldsModelSelector()
}

export const pokemonV2MovemetaailmentVarPopFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentVarPopFields()
