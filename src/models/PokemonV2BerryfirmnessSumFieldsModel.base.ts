/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessSumFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryfirmnessSumFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_sum_fields"), "pokemon_v2_berryfirmness_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessSumFields() {
  return new PokemonV2BerryfirmnessSumFieldsModelSelector()
}

export const pokemonV2BerryfirmnessSumFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessSumFields()
