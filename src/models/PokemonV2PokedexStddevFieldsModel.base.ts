/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexStddevFieldsBase
 * auto generated base class for the model PokemonV2PokedexStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokedexStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokedexStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_stddev_fields"), "pokemon_v2_pokedex_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2PokedexStddevFields() {
  return new PokemonV2PokedexStddevFieldsModelSelector()
}

export const pokemonV2PokedexStddevFieldsModelPrimitives = selectFromPokemonV2PokedexStddevFields().region_id
