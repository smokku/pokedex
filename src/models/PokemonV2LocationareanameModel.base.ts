/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameBase
 * auto generated base class for the model PokemonV2LocationareanameModel.
 *
 * columns and relationships of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameModelBase = ModelBase
  .named('PokemonV2Locationareaname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname"), "pokemon_v2_locationareaname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_locationarea: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_locationarea(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`pokemon_v2_locationarea`, PokemonV2LocationareaModelSelector, builder) }
}
export function selectFromPokemonV2Locationareaname() {
  return new PokemonV2LocationareanameModelSelector()
}

export const pokemonV2LocationareanameModelPrimitives = selectFromPokemonV2Locationareaname().language_id.location_area_id.name
