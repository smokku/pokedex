/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectMinFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveeffectMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_min_fields"), "pokemon_v2_moveeffect_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectMinFields() {
  return new PokemonV2MoveeffectMinFieldsModelSelector()
}

export const pokemonV2MoveeffectMinFieldsModelPrimitives = selectFromPokemonV2MoveeffectMinFields()
