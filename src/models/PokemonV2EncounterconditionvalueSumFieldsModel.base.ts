/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueSumFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionvalueSumFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_sum_fields"), "pokemon_v2_encounterconditionvalue_sum_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueSumFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueSumFields() {
  return new PokemonV2EncounterconditionvalueSumFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueSumFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueSumFields().encounter_condition_id
