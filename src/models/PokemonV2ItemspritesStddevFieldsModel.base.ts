/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemspritesStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_stddev_fields"), "pokemon_v2_itemsprites_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesStddevFields() {
  return new PokemonV2ItemspritesStddevFieldsModelSelector()
}

export const pokemonV2ItemspritesStddevFieldsModelPrimitives = selectFromPokemonV2ItemspritesStddevFields().item_id
