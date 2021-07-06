/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemspritesStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_stddev_samp_fields"), "pokemon_v2_itemsprites_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesStddevSampFields() {
  return new PokemonV2ItemspritesStddevSampFieldsModelSelector()
}

export const pokemonV2ItemspritesStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemspritesStddevSampFields().item_id
