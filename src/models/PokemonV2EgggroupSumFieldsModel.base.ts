/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupSumFieldsBase
 * auto generated base class for the model PokemonV2EgggroupSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EgggroupSumFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_sum_fields"), "pokemon_v2_egggroup_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EgggroupSumFields() {
  return new PokemonV2EgggroupSumFieldsModelSelector()
}

export const pokemonV2EgggroupSumFieldsModelPrimitives = selectFromPokemonV2EgggroupSumFields()
