/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemongameindexVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_var_pop_fields"), "pokemon_v2_pokemongameindex_var_pop_fields"),
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

export class PokemonV2PokemongameindexVarPopFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemongameindexVarPopFields() {
  return new PokemonV2PokemongameindexVarPopFieldsModelSelector()
}

export const pokemonV2PokemongameindexVarPopFieldsModelPrimitives = selectFromPokemonV2PokemongameindexVarPopFields().game_index.pokemon_id.version_id
