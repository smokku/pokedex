/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethoddescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_sum_fields"), "pokemon_v2_movelearnmethoddescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionSumFields() {
  return new PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionSumFieldsModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionSumFields().language_id.move_learn_method_id
