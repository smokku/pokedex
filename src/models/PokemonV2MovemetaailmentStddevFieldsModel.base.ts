/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentStddevFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetaailmentStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_stddev_fields"), "pokemon_v2_movemetaailment_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentStddevFields() {
  return new PokemonV2MovemetaailmentStddevFieldsModelSelector()
}

export const pokemonV2MovemetaailmentStddevFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentStddevFields()
