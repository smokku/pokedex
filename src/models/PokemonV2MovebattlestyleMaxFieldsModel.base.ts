/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleMaxFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovebattlestyleMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_max_fields"), "pokemon_v2_movebattlestyle_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovebattlestyleMaxFields() {
  return new PokemonV2MovebattlestyleMaxFieldsModelSelector()
}

export const pokemonV2MovebattlestyleMaxFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleMaxFields().name
