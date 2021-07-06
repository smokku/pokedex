/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovelearnmethodModel, PokemonV2MovelearnmethodModelType } from "./PokemonV2MovelearnmethodModel"
import { PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameModel.
 *
 * columns and relationships of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameModelBase = ModelBase
  .named('PokemonV2Movelearnmethodname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname"), "pokemon_v2_movelearnmethodname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movelearnmethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movelearnmethod(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_movelearnmethod`, PokemonV2MovelearnmethodModelSelector, builder) }
}
export function selectFromPokemonV2Movelearnmethodname() {
  return new PokemonV2MovelearnmethodnameModelSelector()
}

export const pokemonV2MovelearnmethodnameModelPrimitives = selectFromPokemonV2Movelearnmethodname().language_id.move_learn_method_id.name
