/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemcategoryStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_stddev_samp_fields"), "pokemon_v2_itemcategory_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryStddevSampFields() {
  return new PokemonV2ItemcategoryStddevSampFieldsModelSelector()
}

export const pokemonV2ItemcategoryStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemcategoryStddevSampFields().item_pocket_id
