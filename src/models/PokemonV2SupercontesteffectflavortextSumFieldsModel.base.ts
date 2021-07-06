/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextSumFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2SupercontesteffectflavortextSumFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_sum_fields"), "pokemon_v2_supercontesteffectflavortext_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    super_contest_effect_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextSumFields() {
  return new PokemonV2SupercontesteffectflavortextSumFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextSumFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextSumFields().language_id.super_contest_effect_id
