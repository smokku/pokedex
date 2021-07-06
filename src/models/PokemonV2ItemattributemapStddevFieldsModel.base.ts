/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributemapStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_stddev_fields"), "pokemon_v2_itemattributemap_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapStddevFields() {
  return new PokemonV2ItemattributemapStddevFieldsModelSelector()
}

export const pokemonV2ItemattributemapStddevFieldsModelPrimitives = selectFromPokemonV2ItemattributemapStddevFields().item_attribute_id.item_id
