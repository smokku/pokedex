/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatStddevPopFieldsBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2NaturepokeathlonstatStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2NaturepokeathlonstatStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat_stddev_pop_fields"), "pokemon_v2_naturepokeathlonstat_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    max_change: types.union(types.undefined, types.null, types.number),
    nature_id: types.union(types.undefined, types.null, types.number),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get max_change() { return this.__attr(`max_change`) }
  get nature_id() { return this.__attr(`nature_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2NaturepokeathlonstatStddevPopFields() {
  return new PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector()
}

export const pokemonV2NaturepokeathlonstatStddevPopFieldsModelPrimitives = selectFromPokemonV2NaturepokeathlonstatStddevPopFields().max_change.nature_id.pokeathlon_stat_id
