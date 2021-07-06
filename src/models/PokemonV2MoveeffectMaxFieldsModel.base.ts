/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_max_fields"), "pokemon_v2_moveeffect_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectMaxFields() {
  return new PokemonV2MoveeffectMaxFieldsModelSelector()
}

export const pokemonV2MoveeffectMaxFieldsModelPrimitives = selectFromPokemonV2MoveeffectMaxFields()
