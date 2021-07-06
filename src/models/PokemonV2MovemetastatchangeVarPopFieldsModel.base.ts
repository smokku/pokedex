/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeVarPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetastatchangeVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_var_pop_fields"), "pokemon_v2_movemetastatchange_var_pop_fields"),
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

export class PokemonV2MovemetastatchangeVarPopFieldsModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2MovemetastatchangeVarPopFields() {
  return new PokemonV2MovemetastatchangeVarPopFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeVarPopFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeVarPopFields().change.move_id.stat_id
