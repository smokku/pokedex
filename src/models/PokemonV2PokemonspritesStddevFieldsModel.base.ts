/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspritesStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_stddev_fields"), "pokemon_v2_pokemonsprites_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesStddevFields() {
  return new PokemonV2PokemonspritesStddevFieldsModelSelector()
}

export const pokemonV2PokemonspritesStddevFieldsModelPrimitives = selectFromPokemonV2PokemonspritesStddevFields().pokemon_id
