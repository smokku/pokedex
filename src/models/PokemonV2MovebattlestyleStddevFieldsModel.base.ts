/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleStddevFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovebattlestyleStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_stddev_fields"), "pokemon_v2_movebattlestyle_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovebattlestyleStddevFields() {
  return new PokemonV2MovebattlestyleStddevFieldsModelSelector()
}

export const pokemonV2MovebattlestyleStddevFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleStddevFields()
