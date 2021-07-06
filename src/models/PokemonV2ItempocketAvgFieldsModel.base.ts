/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketAvgFieldsBase
 * auto generated base class for the model PokemonV2ItempocketAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItempocketAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_avg_fields"), "pokemon_v2_itempocket_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketAvgFields() {
  return new PokemonV2ItempocketAvgFieldsModelSelector()
}

export const pokemonV2ItempocketAvgFieldsModelPrimitives = selectFromPokemonV2ItempocketAvgFields()
