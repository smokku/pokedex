/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatMaxFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokeathlonstatMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_max_fields"), "pokemon_v2_pokeathlonstat_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2PokeathlonstatMaxFields() {
  return new PokemonV2PokeathlonstatMaxFieldsModelSelector()
}

export const pokemonV2PokeathlonstatMaxFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatMaxFields().name
