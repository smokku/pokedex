/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokedexStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokedexStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_stddev_pop_fields"), "pokemon_v2_pokedex_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexStddevPopFields() {
  return new PokemonV2PokedexStddevPopFieldsModelSelector()
}

export const pokemonV2PokedexStddevPopFieldsModelPrimitives = selectFromPokemonV2PokedexStddevPopFields().region_id
