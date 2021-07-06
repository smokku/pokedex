/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessStddevPopFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryfirmnessStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_stddev_pop_fields"), "pokemon_v2_berryfirmness_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryfirmnessStddevPopFields() {
  return new PokemonV2BerryfirmnessStddevPopFieldsModelSelector()
}

export const pokemonV2BerryfirmnessStddevPopFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessStddevPopFields()
