/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupModel, PokemonV2EgggroupModelType } from "./PokemonV2EgggroupModel"
import { PokemonV2EgggroupModelSelector } from "./PokemonV2EgggroupModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameBase
 * auto generated base class for the model PokemonV2EgggroupnameModel.
 *
 * columns and relationships of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameModelBase = ModelBase
  .named('PokemonV2Egggroupname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname"), "pokemon_v2_egggroupname"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_egggroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_egggroup(builder?: string | PokemonV2EgggroupModelSelector | ((selector: PokemonV2EgggroupModelSelector) => PokemonV2EgggroupModelSelector)) { return this.__child(`pokemon_v2_egggroup`, PokemonV2EgggroupModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Egggroupname() {
  return new PokemonV2EgggroupnameModelSelector()
}

export const pokemonV2EgggroupnameModelPrimitives = selectFromPokemonV2Egggroupname().egg_group_id.language_id.name
