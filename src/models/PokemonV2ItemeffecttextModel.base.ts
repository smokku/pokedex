/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextBase
 * auto generated base class for the model PokemonV2ItemeffecttextModel.
 *
 * columns and relationships of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextModelBase = ModelBase
  .named('PokemonV2Itemeffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext"), "pokemon_v2_itemeffecttext"),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    short_effect: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itemeffecttext() {
  return new PokemonV2ItemeffecttextModelSelector()
}

export const pokemonV2ItemeffecttextModelPrimitives = selectFromPokemonV2Itemeffecttext().effect.item_id.language_id.short_effect
