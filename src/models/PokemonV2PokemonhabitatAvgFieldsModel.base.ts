/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonhabitatAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_avg_fields"), "pokemon_v2_pokemonhabitat_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonhabitatAvgFields() {
  return new PokemonV2PokemonhabitatAvgFieldsModelSelector()
}

export const pokemonV2PokemonhabitatAvgFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatAvgFields()
