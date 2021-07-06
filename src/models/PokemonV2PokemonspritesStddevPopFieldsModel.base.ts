/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspritesStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_stddev_pop_fields"), "pokemon_v2_pokemonsprites_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesStddevPopFields() {
  return new PokemonV2PokemonspritesStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonspritesStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonspritesStddevPopFields().pokemon_id
