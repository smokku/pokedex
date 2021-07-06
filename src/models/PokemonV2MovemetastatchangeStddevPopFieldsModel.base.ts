/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetastatchangeStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_stddev_pop_fields"), "pokemon_v2_movemetastatchange_stddev_pop_fields"),
    change: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetastatchangeStddevPopFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeStddevPopFields() {
  return new PokemonV2MovemetastatchangeStddevPopFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeStddevPopFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeStddevPopFields().change.move_id.stat_id
