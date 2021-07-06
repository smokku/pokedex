/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PalparkareaModel, PokemonV2PalparkareaModelType } from "./PokemonV2PalparkareaModel"
import { PokemonV2PalparkareaModelSelector } from "./PokemonV2PalparkareaModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameBase
 * auto generated base class for the model PokemonV2PalparkareanameModel.
 *
 * columns and relationships of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameModelBase = ModelBase
  .named('PokemonV2Palparkareaname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname"), "pokemon_v2_palparkareaname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pal_park_area_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_palparkarea: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_palparkarea(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`pokemon_v2_palparkarea`, PokemonV2PalparkareaModelSelector, builder) }
}
export function selectFromPokemonV2Palparkareaname() {
  return new PokemonV2PalparkareanameModelSelector()
}

export const pokemonV2PalparkareanameModelPrimitives = selectFromPokemonV2Palparkareaname().language_id.name.pal_park_area_id
