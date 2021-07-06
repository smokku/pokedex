/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategoryModel, PokemonV2ItemcategoryModelType } from "./PokemonV2ItemcategoryModel"
import { PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameBase
 * auto generated base class for the model PokemonV2ItemcategorynameModel.
 *
 * columns and relationships of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameModelBase = ModelBase
  .named('PokemonV2Itemcategoryname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname"), "pokemon_v2_itemcategoryname"),
    id: types.union(types.undefined, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_itemcategory: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemcategory(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`pokemon_v2_itemcategory`, PokemonV2ItemcategoryModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itemcategoryname() {
  return new PokemonV2ItemcategorynameModelSelector()
}

export const pokemonV2ItemcategorynameModelPrimitives = selectFromPokemonV2Itemcategoryname().item_category_id.language_id.name
