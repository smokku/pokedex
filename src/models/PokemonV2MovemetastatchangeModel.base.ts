/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeBase
 * auto generated base class for the model PokemonV2MovemetastatchangeModel.
 *
 * columns and relationships of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeModelBase = ModelBase
  .named('PokemonV2Movemetastatchange')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange"), "pokemon_v2_movemetastatchange"),
    change: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_stat: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetastatchangeModelSelector extends QueryBuilder {
  get change() { return this.__attr(`change`) }
  get id() { return this.__attr(`id`) }
  get move_id() { return this.__attr(`move_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2Movemetastatchange() {
  return new PokemonV2MovemetastatchangeModelSelector()
}

export const pokemonV2MovemetastatchangeModelPrimitives = selectFromPokemonV2Movemetastatchange().change.move_id.stat_id
