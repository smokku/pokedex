/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexMinFieldsBase
 * auto generated base class for the model PokemonV2PokedexMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexMinFieldsModelBase = ModelBase
  .named('PokemonV2PokedexMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_min_fields"), "pokemon_v2_pokedex_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexMinFields() {
  return new PokemonV2PokedexMinFieldsModelSelector()
}

export const pokemonV2PokedexMinFieldsModelPrimitives = selectFromPokemonV2PokedexMinFields().name.region_id
