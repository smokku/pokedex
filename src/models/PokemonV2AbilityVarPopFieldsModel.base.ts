/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityVarPopFieldsBase
 * auto generated base class for the model PokemonV2AbilityVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityVarPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilityVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_var_pop_fields"), "pokemon_v2_ability_var_pop_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityVarPopFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2AbilityVarPopFields() {
  return new PokemonV2AbilityVarPopFieldsModelSelector()
}

export const pokemonV2AbilityVarPopFieldsModelPrimitives = selectFromPokemonV2AbilityVarPopFields().generation_id
