/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectAvgFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffectAvgFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_avg_fields"), "pokemon_v2_moveeffect_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectAvgFields() {
  return new PokemonV2MoveeffectAvgFieldsModelSelector()
}

export const pokemonV2MoveeffectAvgFieldsModelPrimitives = selectFromPokemonV2MoveeffectAvgFields()
