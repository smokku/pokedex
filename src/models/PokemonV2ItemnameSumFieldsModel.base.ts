/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameSumFieldsBase
 * auto generated base class for the model PokemonV2ItemnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemnameSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_sum_fields"), "pokemon_v2_itemname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameSumFields() {
  return new PokemonV2ItemnameSumFieldsModelSelector()
}

export const pokemonV2ItemnameSumFieldsModelPrimitives = selectFromPokemonV2ItemnameSumFields().item_id.language_id
