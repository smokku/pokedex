/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemcategorynameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_stddev_samp_fields"), "pokemon_v2_itemcategoryname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameStddevSampFields() {
  return new PokemonV2ItemcategorynameStddevSampFieldsModelSelector()
}

export const pokemonV2ItemcategorynameStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameStddevSampFields().item_category_id.language_id
