/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContestcomboBase
 * auto generated base class for the model PokemonV2ContestcomboModel.
 *
 * columns and relationships of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboModelBase = ModelBase
  .named('PokemonV2Contestcombo')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contestcombo"), "pokemon_v2_contestcombo"),
    first_move_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemonV2MoveBySecondMoveId: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    /** An object relationship */
    pokemon_v2_move: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveModel)),
    second_move_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContestcomboModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
  pokemonV2MoveBySecondMoveId(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemonV2MoveBySecondMoveId`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_move(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_move`, PokemonV2MoveModelSelector, builder) }
}
export function selectFromPokemonV2Contestcombo() {
  return new PokemonV2ContestcomboModelSelector()
}

export const pokemonV2ContestcomboModelPrimitives = selectFromPokemonV2Contestcombo().first_move_id.second_move_id
