/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionSumFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionSumFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_sum_fields"), "pokemon_v2_encountercondition_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionSumFields() {
  return new PokemonV2EncounterconditionSumFieldsModelSelector()
}

export const pokemonV2EncounterconditionSumFieldsModelPrimitives = selectFromPokemonV2EncounterconditionSumFields()
