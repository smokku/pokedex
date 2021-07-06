/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesBase
 * auto generated base class for the model PokemonV2PokemonformspritesModel.
 *
 * columns and relationships of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesModelBase = ModelBase
  .named('PokemonV2Pokemonformsprites')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites"), "pokemon_v2_pokemonformsprites"),
    id: types.union(types.undefined, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemonform: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformModel)),
    sprites: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get sprites() { return this.__attr(`sprites`) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonformsprites() {
  return new PokemonV2PokemonformspritesModelSelector()
}

export const pokemonV2PokemonformspritesModelPrimitives = selectFromPokemonV2Pokemonformsprites().pokemon_form_id.sprites
