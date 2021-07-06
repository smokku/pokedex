/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformgenerationStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonformgenerationStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformgenerationStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformgenerationStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformgeneration_stddev_fields"), "pokemon_v2_pokemonformgeneration_stddev_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformgenerationStddevFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformgenerationStddevFields() {
  return new PokemonV2PokemonformgenerationStddevFieldsModelSelector()
}

export const pokemonV2PokemonformgenerationStddevFieldsModelPrimitives = selectFromPokemonV2PokemonformgenerationStddevFields().game_index.generation_id.pokemon_form_id
