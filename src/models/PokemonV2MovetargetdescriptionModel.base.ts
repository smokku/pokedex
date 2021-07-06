/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovetargetModel, PokemonV2MovetargetModelType } from "./PokemonV2MovetargetModel"
import { PokemonV2MovetargetModelSelector } from "./PokemonV2MovetargetModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionModel.
 *
 * columns and relationships of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionModelBase = ModelBase
  .named('PokemonV2Movetargetdescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription"), "pokemon_v2_movetargetdescription"),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_target_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movetarget: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movetarget(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`pokemon_v2_movetarget`, PokemonV2MovetargetModelSelector, builder) }
}
export function selectFromPokemonV2Movetargetdescription() {
  return new PokemonV2MovetargetdescriptionModelSelector()
}

export const pokemonV2MovetargetdescriptionModelPrimitives = selectFromPokemonV2Movetargetdescription().description.language_id.move_target_id
