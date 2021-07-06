/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_stddev_fields"), "pokemon_v2_itemname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameStddevFields() {
  return new PokemonV2ItemnameStddevFieldsModelSelector()
}

export const pokemonV2ItemnameStddevFieldsModelPrimitives = selectFromPokemonV2ItemnameStddevFields().item_id.language_id
