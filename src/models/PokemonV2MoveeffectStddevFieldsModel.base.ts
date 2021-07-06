/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectStddevFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffectStddevFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_stddev_fields"), "pokemon_v2_moveeffect_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectStddevFields() {
  return new PokemonV2MoveeffectStddevFieldsModelSelector()
}

export const pokemonV2MoveeffectStddevFieldsModelPrimitives = selectFromPokemonV2MoveeffectStddevFields()
