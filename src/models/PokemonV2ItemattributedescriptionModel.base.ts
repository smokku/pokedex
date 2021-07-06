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
 * PokemonV2ItemattributedescriptionBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionModel.
 *
 * columns and relationships of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionModelBase = ModelBase
  .named('PokemonV2Itemattributedescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription"), "pokemon_v2_itemattributedescription"),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
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

export class PokemonV2ItemattributedescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_itemattribute(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`pokemon_v2_itemattribute`, PokemonV2ItemattributeModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itemattributedescription() {
  return new PokemonV2ItemattributedescriptionModelSelector()
}

export const pokemonV2ItemattributedescriptionModelPrimitives = selectFromPokemonV2Itemattributedescription().description.item_attribute_id.language_id
