/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatSumFieldsBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2NaturepokeathlonstatSumFieldsModelBase = ModelBase
  .named('PokemonV2NaturepokeathlonstatSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat_sum_fields"), "pokemon_v2_naturepokeathlonstat_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    max_change: types.union(types.undefined, types.null, types.integer),
    nature_id: types.union(types.undefined, types.null, types.integer),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get max_change() { return this.__attr(`max_change`) }
  get nature_id() { return this.__attr(`nature_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2NaturepokeathlonstatSumFields() {
  return new PokemonV2NaturepokeathlonstatSumFieldsModelSelector()
}

export const pokemonV2NaturepokeathlonstatSumFieldsModelPrimitives = selectFromPokemonV2NaturepokeathlonstatSumFields().max_change.nature_id.pokeathlon_stat_id
