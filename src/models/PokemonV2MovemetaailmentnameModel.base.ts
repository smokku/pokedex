/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovemetaailmentModel, PokemonV2MovemetaailmentModelType } from "./PokemonV2MovemetaailmentModel"
import { PokemonV2MovemetaailmentModelSelector } from "./PokemonV2MovemetaailmentModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameModel.
 *
 * columns and relationships of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameModelBase = ModelBase
  .named('PokemonV2Movemetaailmentname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname"), "pokemon_v2_movemetaailmentname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movemetaailment: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movemetaailment(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`pokemon_v2_movemetaailment`, PokemonV2MovemetaailmentModelSelector, builder) }
}
export function selectFromPokemonV2Movemetaailmentname() {
  return new PokemonV2MovemetaailmentnameModelSelector()
}

export const pokemonV2MovemetaailmentnameModelPrimitives = selectFromPokemonV2Movemetaailmentname().language_id.move_meta_ailment_id.name
