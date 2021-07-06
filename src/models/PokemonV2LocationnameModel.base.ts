/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameBase
 * auto generated base class for the model PokemonV2LocationnameModel.
 *
 * columns and relationships of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameModelBase = ModelBase
  .named('PokemonV2Locationname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname"), "pokemon_v2_locationname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_location: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
}
export function selectFromPokemonV2Locationname() {
  return new PokemonV2LocationnameModelSelector()
}

export const pokemonV2LocationnameModelPrimitives = selectFromPokemonV2Locationname().language_id.location_id.name
