/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameSumFieldsBase
 * auto generated base class for the model PokemonV2MovenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovenameSumFieldsModelBase = ModelBase
  .named('PokemonV2MovenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_sum_fields"), "pokemon_v2_movename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MovenameSumFields() {
  return new PokemonV2MovenameSumFieldsModelSelector()
}

export const pokemonV2MovenameSumFieldsModelPrimitives = selectFromPokemonV2MovenameSumFields().language_id.move_id
