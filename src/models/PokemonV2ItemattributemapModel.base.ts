/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2ItemattributeModel, PokemonV2ItemattributeModelType } from "./PokemonV2ItemattributeModel"
import { PokemonV2ItemattributeModelSelector } from "./PokemonV2ItemattributeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapBase
 * auto generated base class for the model PokemonV2ItemattributemapModel.
 *
 * columns and relationships of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapModelBase = ModelBase
  .named('PokemonV2Itemattributemap')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap"), "pokemon_v2_itemattributemap"),
    id: types.union(types.undefined, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemon_v2_itemattribute: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_itemattribute(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute`, PokemonV2ItemattributeModelSelector, builder) }
}
export function selectFromPokemonV2Itemattributemap() {
  return new PokemonV2ItemattributemapModelSelector()
}

export const pokemonV2ItemattributemapModelPrimitives = selectFromPokemonV2Itemattributemap().item_attribute_id.item_id
