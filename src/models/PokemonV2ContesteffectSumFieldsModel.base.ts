/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectSumFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesteffectSumFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_sum_fields"), "pokemon_v2_contesteffect_sum_fields"),
    appeal: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    jam: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectSumFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
}
export function selectFromPokemonV2ContesteffectSumFields() {
  return new PokemonV2ContesteffectSumFieldsModelSelector()
}

export const pokemonV2ContesteffectSumFieldsModelPrimitives = selectFromPokemonV2ContesteffectSumFields().appeal.jam
