/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextBase
 * auto generated base class for the model PokemonV2AbilityflavortextModel.
 *
 * columns and relationships of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextModelBase = ModelBase
  .named('PokemonV2Abilityflavortext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext"), "pokemon_v2_abilityflavortext"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    flavor_text: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_ability: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Abilityflavortext() {
  return new PokemonV2AbilityflavortextModelSelector()
}

export const pokemonV2AbilityflavortextModelPrimitives = selectFromPokemonV2Abilityflavortext().ability_id.flavor_text.language_id.version_group_id
