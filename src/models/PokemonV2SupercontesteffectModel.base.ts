/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2SupercontesteffectflavortextAggregateModel, PokemonV2SupercontesteffectflavortextAggregateModelType } from "./PokemonV2SupercontesteffectflavortextAggregateModel"
import { PokemonV2SupercontesteffectflavortextAggregateModelSelector } from "./PokemonV2SupercontesteffectflavortextAggregateModel.base"
import { PokemonV2SupercontesteffectflavortextModel, PokemonV2SupercontesteffectflavortextModelType } from "./PokemonV2SupercontesteffectflavortextModel"
import { PokemonV2SupercontesteffectflavortextModelSelector } from "./PokemonV2SupercontesteffectflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectBase
 * auto generated base class for the model PokemonV2SupercontesteffectModel.
 *
 * columns and relationships of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectModelBase = ModelBase
  .named('PokemonV2Supercontesteffect')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect"), "pokemon_v2_supercontesteffect"),
    appeal: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_supercontesteffectflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontesteffectflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_supercontesteffectflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2SupercontesteffectflavortextAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortexts(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortexts`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
  pokemon_v2_supercontesteffectflavortexts_aggregate(builder?: string | PokemonV2SupercontesteffectflavortextAggregateModelSelector | ((selector: PokemonV2SupercontesteffectflavortextAggregateModelSelector) => PokemonV2SupercontesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_supercontesteffectflavortexts_aggregate`, PokemonV2SupercontesteffectflavortextAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Supercontesteffect() {
  return new PokemonV2SupercontesteffectModelSelector()
}

export const pokemonV2SupercontesteffectModelPrimitives = selectFromPokemonV2Supercontesteffect().appeal
