/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovedamageclassModel, PokemonV2MovedamageclassModelType } from "./PokemonV2MovedamageclassModel"
import { PokemonV2MovedamageclassModelSelector } from "./PokemonV2MovedamageclassModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionModel.
 *
 * columns and relationships of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionModelBase = ModelBase
  .named('PokemonV2Movedamageclassdescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription"), "pokemon_v2_movedamageclassdescription"),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movedamageclass: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movedamageclass(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass`, PokemonV2MovedamageclassModelSelector, builder) }
}
export function selectFromPokemonV2Movedamageclassdescription() {
  return new PokemonV2MovedamageclassdescriptionModelSelector()
}

export const pokemonV2MovedamageclassdescriptionModelPrimitives = selectFromPokemonV2Movedamageclassdescription().description.language_id.move_damage_class_id
