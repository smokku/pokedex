/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonhabitatSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_sum_fields"), "pokemon_v2_pokemonhabitat_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonhabitatSumFields() {
  return new PokemonV2PokemonhabitatSumFieldsModelSelector()
}

export const pokemonV2PokemonhabitatSumFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatSumFields()
