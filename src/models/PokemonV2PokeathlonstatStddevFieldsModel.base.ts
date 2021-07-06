/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatStddevFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokeathlonstatStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_stddev_fields"), "pokemon_v2_pokeathlonstat_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatStddevFields() {
  return new PokemonV2PokeathlonstatStddevFieldsModelSelector()
}

export const pokemonV2PokeathlonstatStddevFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatStddevFields()
