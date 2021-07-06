/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassVarPopFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovedamageclassVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_var_pop_fields"), "pokemon_v2_movedamageclass_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovedamageclassVarPopFields() {
  return new PokemonV2MovedamageclassVarPopFieldsModelSelector()
}

export const pokemonV2MovedamageclassVarPopFieldsModelPrimitives = selectFromPokemonV2MovedamageclassVarPopFields()
