/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapeAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonshapeAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapeAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_avg_fields"), "pokemon_v2_pokemonshape_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonshapeAvgFields() {
  return new PokemonV2PokemonshapeAvgFieldsModelSelector()
}

export const pokemonV2PokemonshapeAvgFieldsModelPrimitives = selectFromPokemonV2PokemonshapeAvgFields()
