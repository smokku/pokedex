/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextSumFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesteffectflavortextSumFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_sum_fields"), "pokemon_v2_contesteffectflavortext_sum_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextSumFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffectflavortextSumFields() {
  return new PokemonV2ContesteffectflavortextSumFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextSumFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextSumFields().contest_effect_id.language_id
