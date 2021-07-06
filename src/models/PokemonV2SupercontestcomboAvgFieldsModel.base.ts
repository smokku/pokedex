/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontestcomboAvgFieldsBase
 * auto generated base class for the model PokemonV2SupercontestcomboAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2SupercontestcomboAvgFieldsModelBase = ModelBase
  .named('PokemonV2SupercontestcomboAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontestcombo_avg_fields"), "pokemon_v2_supercontestcombo_avg_fields"),
    first_move_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    second_move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontestcomboAvgFieldsModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
}
export function selectFromPokemonV2SupercontestcomboAvgFields() {
  return new PokemonV2SupercontestcomboAvgFieldsModelSelector()
}

export const pokemonV2SupercontestcomboAvgFieldsModelPrimitives = selectFromPokemonV2SupercontestcomboAvgFields().first_move_id.second_move_id
