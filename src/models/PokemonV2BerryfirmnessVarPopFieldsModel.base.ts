/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessVarPopFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryfirmnessVarPopFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_var_pop_fields"), "pokemon_v2_berryfirmness_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessVarPopFields() {
  return new PokemonV2BerryfirmnessVarPopFieldsModelSelector()
}

export const pokemonV2BerryfirmnessVarPopFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessVarPopFields()
