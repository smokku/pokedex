/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameSumFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethodnameSumFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname_sum_fields"), "pokemon_v2_movelearnmethodname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
}
export function selectFromPokemonV2MovelearnmethodnameSumFields() {
  return new PokemonV2MovelearnmethodnameSumFieldsModelSelector()
}

export const pokemonV2MovelearnmethodnameSumFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodnameSumFields().language_id.move_learn_method_id
