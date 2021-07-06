/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorSumFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavorSumFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_sum_fields"), "pokemon_v2_berryflavor_sum_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorSumFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryflavorSumFields() {
  return new PokemonV2BerryflavorSumFieldsModelSelector()
}

export const pokemonV2BerryflavorSumFieldsModelPrimitives = selectFromPokemonV2BerryflavorSumFields().contest_type_id
