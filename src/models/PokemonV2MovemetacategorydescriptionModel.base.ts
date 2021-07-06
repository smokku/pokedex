/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovemetacategoryModel, PokemonV2MovemetacategoryModelType } from "./PokemonV2MovemetacategoryModel"
import { PokemonV2MovemetacategoryModelSelector } from "./PokemonV2MovemetacategoryModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionModel.
 *
 * columns and relationships of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionModelBase = ModelBase
  .named('PokemonV2Movemetacategorydescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription"), "pokemon_v2_movemetacategorydescription"),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_meta_category_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movemetacategory: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_category_id() { return this.__attr(`move_meta_category_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movemetacategory(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`pokemon_v2_movemetacategory`, PokemonV2MovemetacategoryModelSelector, builder) }
}
export function selectFromPokemonV2Movemetacategorydescription() {
  return new PokemonV2MovemetacategorydescriptionModelSelector()
}

export const pokemonV2MovemetacategorydescriptionModelPrimitives = selectFromPokemonV2Movemetacategorydescription().description.language_id.move_meta_category_id
