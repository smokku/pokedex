/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesBase
 * auto generated base class for the model PokemonV2PokemonspritesModel.
 *
 * columns and relationships of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesModelBase = ModelBase
  .named('PokemonV2Pokemonsprites')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites"), "pokemon_v2_pokemonsprites"),
    id: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    sprites: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get sprites() { return this.__attr(`sprites`) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonsprites() {
  return new PokemonV2PokemonspritesModelSelector()
}

export const pokemonV2PokemonspritesModelPrimitives = selectFromPokemonV2Pokemonsprites().pokemon_id.sprites
