/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessAvgFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryfirmnessAvgFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_avg_fields"), "pokemon_v2_berryfirmness_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessAvgFields() {
  return new PokemonV2BerryfirmnessAvgFieldsModelSelector()
}

export const pokemonV2BerryfirmnessAvgFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessAvgFields()
