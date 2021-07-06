/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexBase
 * auto generated base class for the model PokemonV2LocationgameindexModel.
 *
 * columns and relationships of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexModelBase = ModelBase
  .named('PokemonV2Locationgameindex')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex"), "pokemon_v2_locationgameindex"),
    game_index: types.union(types.undefined, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_location: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationgameindexModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_location(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`pokemon_v2_location`, PokemonV2LocationModelSelector, builder) }
}
export function selectFromPokemonV2Locationgameindex() {
  return new PokemonV2LocationgameindexModelSelector()
}

export const pokemonV2LocationgameindexModelPrimitives = selectFromPokemonV2Locationgameindex().game_index.generation_id.location_id
