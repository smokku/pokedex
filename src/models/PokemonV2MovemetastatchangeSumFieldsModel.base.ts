/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeSumFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetastatchangeSumFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_sum_fields"), "pokemon_v2_movemetastatchange_sum_fields"),
    change: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetastatchangeSumFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeSumFields() {
  return new PokemonV2MovemetastatchangeSumFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeSumFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeSumFields().change.move_id.stat_id
