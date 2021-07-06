/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetastatchangeStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_stddev_samp_fields"), "pokemon_v2_movemetastatchange_stddev_samp_fields"),
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

export class PokemonV2MovemetastatchangeStddevSampFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeStddevSampFields() {
  return new PokemonV2MovemetastatchangeStddevSampFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeStddevSampFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeStddevSampFields().change.move_id.stat_id
