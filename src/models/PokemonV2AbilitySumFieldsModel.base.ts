/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitySumFieldsBase
 * auto generated base class for the model PokemonV2AbilitySumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitySumFieldsModelBase = ModelBase
  .named('PokemonV2AbilitySumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_sum_fields"), "pokemon_v2_ability_sum_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitySumFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2AbilitySumFields() {
  return new PokemonV2AbilitySumFieldsModelSelector()
}

export const pokemonV2AbilitySumFieldsModelPrimitives = selectFromPokemonV2AbilitySumFields().generation_id
