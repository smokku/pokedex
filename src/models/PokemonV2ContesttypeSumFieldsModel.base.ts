/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeSumFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesttypeSumFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_sum_fields"), "pokemon_v2_contesttype_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeSumFields() {
  return new PokemonV2ContesttypeSumFieldsModelSelector()
}

export const pokemonV2ContesttypeSumFieldsModelPrimitives = selectFromPokemonV2ContesttypeSumFields()
