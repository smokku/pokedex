/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeSumFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributeSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_sum_fields"), "pokemon_v2_moveattribute_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveattributeSumFields() {
  return new PokemonV2MoveattributeSumFieldsModelSelector()
}

export const pokemonV2MoveattributeSumFieldsModelPrimitives = selectFromPokemonV2MoveattributeSumFields()
