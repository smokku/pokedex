/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontestcomboMaxFieldsBase
 * auto generated base class for the model PokemonV2SupercontestcomboMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontestcomboMaxFieldsModelBase = ModelBase
  .named('PokemonV2SupercontestcomboMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontestcombo_max_fields"), "pokemon_v2_supercontestcombo_max_fields"),
    first_move_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    second_move_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontestcomboMaxFieldsModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
}
export function selectFromPokemonV2SupercontestcomboMaxFields() {
  return new PokemonV2SupercontestcomboMaxFieldsModelSelector()
}

export const pokemonV2SupercontestcomboMaxFieldsModelPrimitives = selectFromPokemonV2SupercontestcomboMaxFields().first_move_id.second_move_id
