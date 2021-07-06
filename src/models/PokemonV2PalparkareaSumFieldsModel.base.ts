/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaSumFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PalparkareaSumFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_sum_fields"), "pokemon_v2_palparkarea_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PalparkareaSumFields() {
  return new PokemonV2PalparkareaSumFieldsModelSelector()
}

export const pokemonV2PalparkareaSumFieldsModelPrimitives = selectFromPokemonV2PalparkareaSumFields()
