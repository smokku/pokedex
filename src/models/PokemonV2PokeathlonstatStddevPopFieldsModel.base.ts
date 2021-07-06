/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokeathlonstatStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_stddev_pop_fields"), "pokemon_v2_pokeathlonstat_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatStddevPopFields() {
  return new PokemonV2PokeathlonstatStddevPopFieldsModelSelector()
}

export const pokemonV2PokeathlonstatStddevPopFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatStddevPopFields()
