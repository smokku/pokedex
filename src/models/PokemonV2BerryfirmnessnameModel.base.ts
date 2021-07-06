/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessModel, PokemonV2BerryfirmnessModelType } from "./PokemonV2BerryfirmnessModel"
import { PokemonV2BerryfirmnessModelSelector } from "./PokemonV2BerryfirmnessModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameModel.
 *
 * columns and relationships of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameModelBase = ModelBase
  .named('PokemonV2Berryfirmnessname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname"), "pokemon_v2_berryfirmnessname"),
    berry_firmness_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_berryfirmness: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_berryfirmness(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`pokemon_v2_berryfirmness`, PokemonV2BerryfirmnessModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Berryfirmnessname() {
  return new PokemonV2BerryfirmnessnameModelSelector()
}

export const pokemonV2BerryfirmnessnameModelPrimitives = selectFromPokemonV2Berryfirmnessname().berry_firmness_id.language_id.name
