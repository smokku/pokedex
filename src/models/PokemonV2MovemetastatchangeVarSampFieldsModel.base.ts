/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetastatchangeVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_var_samp_fields"), "pokemon_v2_movemetastatchange_var_samp_fields"),
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

export class PokemonV2MovemetastatchangeVarSampFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeVarSampFields() {
  return new PokemonV2MovemetastatchangeVarSampFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeVarSampFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeVarSampFields().change.move_id.stat_id
