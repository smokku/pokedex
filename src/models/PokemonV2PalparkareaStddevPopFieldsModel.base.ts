/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PalparkareaStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_stddev_pop_fields"), "pokemon_v2_palparkarea_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PalparkareaStddevPopFields() {
  return new PokemonV2PalparkareaStddevPopFieldsModelSelector()
}

export const pokemonV2PalparkareaStddevPopFieldsModelPrimitives = selectFromPokemonV2PalparkareaStddevPopFields()
