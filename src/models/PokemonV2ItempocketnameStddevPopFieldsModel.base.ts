/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItempocketnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_stddev_pop_fields"), "pokemon_v2_itempocketname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameStddevPopFields() {
  return new PokemonV2ItempocketnameStddevPopFieldsModelSelector()
}

export const pokemonV2ItempocketnameStddevPopFieldsModelPrimitives = selectFromPokemonV2ItempocketnameStddevPopFields().item_pocket_id.language_id
