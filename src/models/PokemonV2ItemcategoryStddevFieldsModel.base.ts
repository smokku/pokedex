/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemcategoryStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_stddev_fields"), "pokemon_v2_itemcategory_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryStddevFields() {
  return new PokemonV2ItemcategoryStddevFieldsModelSelector()
}

export const pokemonV2ItemcategoryStddevFieldsModelPrimitives = selectFromPokemonV2ItemcategoryStddevFields().item_pocket_id
