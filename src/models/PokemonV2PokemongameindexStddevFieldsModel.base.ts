/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemongameindexStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_stddev_fields"), "pokemon_v2_pokemongameindex_stddev_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexStddevFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemongameindexStddevFields() {
  return new PokemonV2PokemongameindexStddevFieldsModelSelector()
}

export const pokemonV2PokemongameindexStddevFieldsModelPrimitives = selectFromPokemonV2PokemongameindexStddevFields().game_index.pokemon_id.version_id
