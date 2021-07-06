/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemspritesVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_variance_fields"), "pokemon_v2_itemsprites_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesVarianceFields() {
  return new PokemonV2ItemspritesVarianceFieldsModelSelector()
}

export const pokemonV2ItemspritesVarianceFieldsModelPrimitives = selectFromPokemonV2ItemspritesVarianceFields().item_id
