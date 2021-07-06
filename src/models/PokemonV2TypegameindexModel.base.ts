/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexBase
 * auto generated base class for the model PokemonV2TypegameindexModel.
 *
 * columns and relationships of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexModelBase = ModelBase
  .named('PokemonV2Typegameindex')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex"), "pokemon_v2_typegameindex"),
    game_index: types.union(types.undefined, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypegameindexModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get type_id() { return this.__attr(`type_id`) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Typegameindex() {
  return new PokemonV2TypegameindexModelSelector()
}

export const pokemonV2TypegameindexModelPrimitives = selectFromPokemonV2Typegameindex().game_index.generation_id.type_id
