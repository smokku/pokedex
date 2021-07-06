/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformgenerationMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonformgenerationMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformgenerationMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformgenerationMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformgeneration_min_fields"), "pokemon_v2_pokemonformgeneration_min_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformgenerationMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformgenerationMinFields() {
  return new PokemonV2PokemonformgenerationMinFieldsModelSelector()
}

export const pokemonV2PokemonformgenerationMinFieldsModelPrimitives = selectFromPokemonV2PokemonformgenerationMinFields().game_index.generation_id.pokemon_form_id
