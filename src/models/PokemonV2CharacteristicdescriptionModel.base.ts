/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicModel, PokemonV2CharacteristicModelType } from "./PokemonV2CharacteristicModel"
import { PokemonV2CharacteristicModelSelector } from "./PokemonV2CharacteristicModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionModel.
 *
 * columns and relationships of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionModelBase = ModelBase
  .named('PokemonV2Characteristicdescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription"), "pokemon_v2_characteristicdescription"),
    characteristic_id: types.union(types.undefined, types.null, types.integer),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_characteristic: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionModelSelector extends QueryBuilder {
  get characteristic_id() { return this.__attr(`characteristic_id`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_characteristic(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`pokemon_v2_characteristic`, PokemonV2CharacteristicModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Characteristicdescription() {
  return new PokemonV2CharacteristicdescriptionModelSelector()
}

export const pokemonV2CharacteristicdescriptionModelPrimitives = selectFromPokemonV2Characteristicdescription().characteristic_id.description.language_id
