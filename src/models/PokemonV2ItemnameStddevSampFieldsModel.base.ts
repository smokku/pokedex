/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_stddev_samp_fields"), "pokemon_v2_itemname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameStddevSampFields() {
  return new PokemonV2ItemnameStddevSampFieldsModelSelector()
}

export const pokemonV2ItemnameStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemnameStddevSampFields().item_id.language_id
