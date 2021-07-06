/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItempocketnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_stddev_samp_fields"), "pokemon_v2_itempocketname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameStddevSampFields() {
  return new PokemonV2ItempocketnameStddevSampFieldsModelSelector()
}

export const pokemonV2ItempocketnameStddevSampFieldsModelPrimitives = selectFromPokemonV2ItempocketnameStddevSampFields().item_pocket_id.language_id
