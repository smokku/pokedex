/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexSumFieldsBase
 * auto generated base class for the model PokemonV2PokedexSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexSumFieldsModelBase = ModelBase
  .named('PokemonV2PokedexSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_sum_fields"), "pokemon_v2_pokedex_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexSumFields() {
  return new PokemonV2PokedexSumFieldsModelSelector()
}

export const pokemonV2PokedexSumFieldsModelPrimitives = selectFromPokemonV2PokedexSumFields().region_id
