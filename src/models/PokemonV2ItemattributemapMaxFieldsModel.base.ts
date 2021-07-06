/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributemapMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_max_fields"), "pokemon_v2_itemattributemap_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapMaxFields() {
  return new PokemonV2ItemattributemapMaxFieldsModelSelector()
}

export const pokemonV2ItemattributemapMaxFieldsModelPrimitives = selectFromPokemonV2ItemattributemapMaxFields().item_attribute_id.item_id
