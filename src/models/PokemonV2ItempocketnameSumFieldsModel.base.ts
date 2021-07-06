/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameSumFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItempocketnameSumFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_sum_fields"), "pokemon_v2_itempocketname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameSumFields() {
  return new PokemonV2ItempocketnameSumFieldsModelSelector()
}

export const pokemonV2ItempocketnameSumFieldsModelPrimitives = selectFromPokemonV2ItempocketnameSumFields().item_pocket_id.language_id
