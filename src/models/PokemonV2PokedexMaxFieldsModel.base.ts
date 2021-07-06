/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexMaxFieldsBase
 * auto generated base class for the model PokemonV2PokedexMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokedexMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_max_fields"), "pokemon_v2_pokedex_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexMaxFields() {
  return new PokemonV2PokedexMaxFieldsModelSelector()
}

export const pokemonV2PokedexMaxFieldsModelPrimitives = selectFromPokemonV2PokedexMaxFields().name.region_id
