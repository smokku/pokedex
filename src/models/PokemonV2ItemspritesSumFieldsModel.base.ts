/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesSumFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemspritesSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_sum_fields"), "pokemon_v2_itemsprites_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesSumFields() {
  return new PokemonV2ItemspritesSumFieldsModelSelector()
}

export const pokemonV2ItemspritesSumFieldsModelPrimitives = selectFromPokemonV2ItemspritesSumFields().item_id
