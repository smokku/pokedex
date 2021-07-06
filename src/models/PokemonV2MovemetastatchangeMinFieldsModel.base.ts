/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeMinFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetastatchangeMinFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_min_fields"), "pokemon_v2_movemetastatchange_min_fields"),
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

export class PokemonV2MovemetastatchangeMinFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeMinFields() {
  return new PokemonV2MovemetastatchangeMinFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeMinFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeMinFields().change.move_id.stat_id
