/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemcategoryStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_stddev_pop_fields"), "pokemon_v2_itemcategory_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryStddevPopFields() {
  return new PokemonV2ItemcategoryStddevPopFieldsModelSelector()
}

export const pokemonV2ItemcategoryStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemcategoryStddevPopFields().item_pocket_id
