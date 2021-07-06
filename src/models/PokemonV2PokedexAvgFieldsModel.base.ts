/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexAvgFieldsBase
 * auto generated base class for the model PokemonV2PokedexAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokedexAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_avg_fields"), "pokemon_v2_pokedex_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexAvgFields() {
  return new PokemonV2PokedexAvgFieldsModelSelector()
}

export const pokemonV2PokedexAvgFieldsModelPrimitives = selectFromPokemonV2PokedexAvgFields().region_id
