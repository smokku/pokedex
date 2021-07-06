/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderAvgFieldsBase
 * auto generated base class for the model PokemonV2GenderAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2GenderAvgFieldsModelBase = ModelBase
  .named('PokemonV2GenderAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_avg_fields"), "pokemon_v2_gender_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderAvgFields() {
  return new PokemonV2GenderAvgFieldsModelSelector()
}

export const pokemonV2GenderAvgFieldsModelPrimitives = selectFromPokemonV2GenderAvgFields()
