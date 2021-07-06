/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemspritesAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_avg_fields"), "pokemon_v2_itemsprites_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesAvgFields() {
  return new PokemonV2ItemspritesAvgFieldsModelSelector()
}

export const pokemonV2ItemspritesAvgFieldsModelPrimitives = selectFromPokemonV2ItemspritesAvgFields().item_id
