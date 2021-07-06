/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItempocketModel, PokemonV2ItempocketModelType } from "./PokemonV2ItempocketModel"
import { PokemonV2ItempocketModelSelector } from "./PokemonV2ItempocketModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameBase
 * auto generated base class for the model PokemonV2ItempocketnameModel.
 *
 * columns and relationships of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameModelBase = ModelBase
  .named('PokemonV2Itempocketname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname"), "pokemon_v2_itempocketname"),
    id: types.union(types.undefined, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_itempocket: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itempocket(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`pokemon_v2_itempocket`, PokemonV2ItempocketModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itempocketname() {
  return new PokemonV2ItempocketnameModelSelector()
}

export const pokemonV2ItempocketnameModelPrimitives = selectFromPokemonV2Itempocketname().item_pocket_id.language_id.name
