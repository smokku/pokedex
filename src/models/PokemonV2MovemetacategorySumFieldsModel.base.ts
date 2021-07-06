/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorySumFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorySumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetacategorySumFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorySumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_sum_fields"), "pokemon_v2_movemetacategory_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorySumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetacategorySumFields() {
  return new PokemonV2MovemetacategorySumFieldsModelSelector()
}

export const pokemonV2MovemetacategorySumFieldsModelPrimitives = selectFromPokemonV2MovemetacategorySumFields()
