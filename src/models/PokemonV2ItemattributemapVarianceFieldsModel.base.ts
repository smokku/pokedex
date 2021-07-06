/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributemapVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_variance_fields"), "pokemon_v2_itemattributemap_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapVarianceFields() {
  return new PokemonV2ItemattributemapVarianceFieldsModelSelector()
}

export const pokemonV2ItemattributemapVarianceFieldsModelPrimitives = selectFromPokemonV2ItemattributemapVarianceFields().item_attribute_id.item_id
