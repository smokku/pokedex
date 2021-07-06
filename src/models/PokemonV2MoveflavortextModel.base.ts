/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextBase
 * auto generated base class for the model PokemonV2MoveflavortextModel.
 *
 * columns and relationships of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextModelBase = ModelBase
  .named('PokemonV2Moveflavortext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext"), "pokemon_v2_moveflavortext"),
    flavor_text: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Moveflavortext() {
  return new PokemonV2MoveflavortextModelSelector()
}

export const pokemonV2MoveflavortextModelPrimitives = selectFromPokemonV2Moveflavortext().flavor_text.language_id.move_id.version_group_id
