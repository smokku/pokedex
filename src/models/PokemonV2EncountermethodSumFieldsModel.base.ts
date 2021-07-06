/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodSumFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncountermethodSumFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_sum_fields"), "pokemon_v2_encountermethod_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2EncountermethodSumFields() {
  return new PokemonV2EncountermethodSumFieldsModelSelector()
}

export const pokemonV2EncountermethodSumFieldsModelPrimitives = selectFromPokemonV2EncountermethodSumFields().order
