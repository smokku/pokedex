/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemeffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_max_fields"), "pokemon_v2_itemeffecttext_max_fields"),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    short_effect: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextMaxFieldsModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
}
export function selectFromPokemonV2ItemeffecttextMaxFields() {
  return new PokemonV2ItemeffecttextMaxFieldsModelSelector()
}

export const pokemonV2ItemeffecttextMaxFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextMaxFields().effect.item_id.language_id.short_effect
