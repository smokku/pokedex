/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextStddevFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2SupercontesteffectflavortextStddevFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_stddev_fields"), "pokemon_v2_supercontesteffectflavortext_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    super_contest_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextStddevFields() {
  return new PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextStddevFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextStddevFields().language_id.super_contest_effect_id
