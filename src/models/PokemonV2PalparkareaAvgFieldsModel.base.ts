/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaAvgFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PalparkareaAvgFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_avg_fields"), "pokemon_v2_palparkarea_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PalparkareaAvgFields() {
  return new PokemonV2PalparkareaAvgFieldsModelSelector()
}

export const pokemonV2PalparkareaAvgFieldsModelPrimitives = selectFromPokemonV2PalparkareaAvgFields()
