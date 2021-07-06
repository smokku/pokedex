/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformgenerationBase
 * auto generated base class for the model PokemonV2PokemonformgenerationModel.
 *
 * columns and relationships of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationModelBase = ModelBase
  .named('PokemonV2Pokemonformgeneration')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformgeneration"), "pokemon_v2_pokemonformgeneration"),
    game_index: types.union(types.undefined, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_pokemonform: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformgenerationModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonformgeneration() {
  return new PokemonV2PokemonformgenerationModelSelector()
}

export const pokemonV2PokemonformgenerationModelPrimitives = selectFromPokemonV2Pokemonformgeneration().game_index.generation_id.pokemon_form_id
