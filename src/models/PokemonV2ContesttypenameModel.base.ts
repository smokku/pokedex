/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesttypeModel, PokemonV2ContesttypeModelType } from "./PokemonV2ContesttypeModel"
import { PokemonV2ContesttypeModelSelector } from "./PokemonV2ContesttypeModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameBase
 * auto generated base class for the model PokemonV2ContesttypenameModel.
 *
 * columns and relationships of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameModelBase = ModelBase
  .named('PokemonV2Contesttypename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename"), "pokemon_v2_contesttypename"),
    color: types.union(types.undefined, types.string),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    flavor: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_contesttype: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameModelSelector extends QueryBuilder {
  get color() { return this.__attr(`color`) }
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get flavor() { return this.__attr(`flavor`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_contesttype(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Contesttypename() {
  return new PokemonV2ContesttypenameModelSelector()
}

export const pokemonV2ContesttypenameModelPrimitives = selectFromPokemonV2Contesttypename().color.contest_type_id.flavor.language_id.name
