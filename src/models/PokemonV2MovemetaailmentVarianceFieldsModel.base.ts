/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetaailmentVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_variance_fields"), "pokemon_v2_movemetaailment_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentVarianceFields() {
  return new PokemonV2MovemetaailmentVarianceFieldsModelSelector()
}

export const pokemonV2MovemetaailmentVarianceFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentVarianceFields()
