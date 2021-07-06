/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributeModel, PokemonV2ItemattributeModelType } from "./PokemonV2ItemattributeModel"
import { PokemonV2ItemattributeModelSelector } from "./PokemonV2ItemattributeModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameBase
 * auto generated base class for the model PokemonV2ItemattributenameModel.
 *
 * columns and relationships of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameModelBase = ModelBase
  .named('PokemonV2Itemattributename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename"), "pokemon_v2_itemattributename"),
    id: types.union(types.undefined, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_itemattribute: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemattribute(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itemattributename() {
  return new PokemonV2ItemattributenameModelSelector()
}

export const pokemonV2ItemattributenameModelPrimitives = selectFromPokemonV2Itemattributename().item_attribute_id.language_id.name
