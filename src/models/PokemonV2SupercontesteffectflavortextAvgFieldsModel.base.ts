/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextAvgFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontesteffectflavortextAvgFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_avg_fields"), "pokemon_v2_supercontesteffectflavortext_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    super_contest_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextAvgFields() {
  return new PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextAvgFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextAvgFields().language_id.super_contest_effect_id
