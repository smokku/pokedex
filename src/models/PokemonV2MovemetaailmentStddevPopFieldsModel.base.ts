/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetaailmentStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_stddev_pop_fields"), "pokemon_v2_movemetaailment_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentStddevPopFields() {
  return new PokemonV2MovemetaailmentStddevPopFieldsModelSelector()
}

export const pokemonV2MovemetaailmentStddevPopFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentStddevPopFields()
