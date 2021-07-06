/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectSumFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2SupercontesteffectSumFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_sum_fields"), "pokemon_v2_supercontesteffect_sum_fields"),
    appeal: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectSumFieldsModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2SupercontesteffectSumFields() {
  return new PokemonV2SupercontesteffectSumFieldsModelSelector()
}

export const pokemonV2SupercontesteffectSumFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectSumFields().appeal
