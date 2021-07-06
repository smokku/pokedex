/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MoveattributeModel, PokemonV2MoveattributeModelType } from "./PokemonV2MoveattributeModel"
import { PokemonV2MoveattributeModelSelector } from "./PokemonV2MoveattributeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameBase
 * auto generated base class for the model PokemonV2MoveattributenameModel.
 *
 * columns and relationships of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameModelBase = ModelBase
  .named('PokemonV2Moveattributename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename"), "pokemon_v2_moveattributename"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_moveattribute: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_moveattribute(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`pokemon_v2_moveattribute`, PokemonV2MoveattributeModelSelector, builder) }
}
export function selectFromPokemonV2Moveattributename() {
  return new PokemonV2MoveattributenameModelSelector()
}

export const pokemonV2MoveattributenameModelPrimitives = selectFromPokemonV2Moveattributename().language_id.move_attribute_id.name
