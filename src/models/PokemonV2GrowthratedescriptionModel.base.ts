/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthrateModel, PokemonV2GrowthrateModelType } from "./PokemonV2GrowthrateModel"
import { PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionModel.
 *
 * columns and relationships of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionModelBase = ModelBase
  .named('PokemonV2Growthratedescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription"), "pokemon_v2_growthratedescription"),
    description: types.union(types.undefined, types.string),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_growthrate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_growthrate(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Growthratedescription() {
  return new PokemonV2GrowthratedescriptionModelSelector()
}

export const pokemonV2GrowthratedescriptionModelPrimitives = selectFromPokemonV2Growthratedescription().description.growth_rate_id.language_id
