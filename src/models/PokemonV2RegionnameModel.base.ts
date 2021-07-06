/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameBase
 * auto generated base class for the model PokemonV2RegionnameModel.
 *
 * columns and relationships of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameModelBase = ModelBase
  .named('PokemonV2Regionname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname"), "pokemon_v2_regionname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_region: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionModel)),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_region(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`pokemon_v2_region`, PokemonV2RegionModelSelector, builder) }
}
export function selectFromPokemonV2Regionname() {
  return new PokemonV2RegionnameModelSelector()
}

export const pokemonV2RegionnameModelPrimitives = selectFromPokemonV2Regionname().language_id.name.region_id
