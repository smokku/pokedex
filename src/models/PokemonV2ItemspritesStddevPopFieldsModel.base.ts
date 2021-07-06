/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemspritesStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_stddev_pop_fields"), "pokemon_v2_itemsprites_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesStddevPopFields() {
  return new PokemonV2ItemspritesStddevPopFieldsModelSelector()
}

export const pokemonV2ItemspritesStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemspritesStddevPopFields().item_id
