/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameStddevFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItempocketnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_stddev_fields"), "pokemon_v2_itempocketname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameStddevFields() {
  return new PokemonV2ItempocketnameStddevFieldsModelSelector()
}

export const pokemonV2ItempocketnameStddevFieldsModelPrimitives = selectFromPokemonV2ItempocketnameStddevFields().item_pocket_id.language_id
