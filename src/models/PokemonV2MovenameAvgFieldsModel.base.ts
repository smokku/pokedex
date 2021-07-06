/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameAvgFieldsBase
 * auto generated base class for the model PokemonV2MovenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_avg_fields"), "pokemon_v2_movename_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameAvgFields() {
  return new PokemonV2MovenameAvgFieldsModelSelector()
}

export const pokemonV2MovenameAvgFieldsModelPrimitives = selectFromPokemonV2MovenameAvgFields().language_id.move_id
