/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffecteffecttextAggregateModel, PokemonV2ContesteffecteffecttextAggregateModelType } from "./PokemonV2ContesteffecteffecttextAggregateModel"
import { PokemonV2ContesteffecteffecttextAggregateModelSelector } from "./PokemonV2ContesteffecteffecttextAggregateModel.base"
import { PokemonV2ContesteffecteffecttextModel, PokemonV2ContesteffecteffecttextModelType } from "./PokemonV2ContesteffecteffecttextModel"
import { PokemonV2ContesteffecteffecttextModelSelector } from "./PokemonV2ContesteffecteffecttextModel.base"
import { PokemonV2ContesteffectflavortextAggregateModel, PokemonV2ContesteffectflavortextAggregateModelType } from "./PokemonV2ContesteffectflavortextAggregateModel"
import { PokemonV2ContesteffectflavortextAggregateModelSelector } from "./PokemonV2ContesteffectflavortextAggregateModel.base"
import { PokemonV2ContesteffectflavortextModel, PokemonV2ContesteffectflavortextModelType } from "./PokemonV2ContesteffectflavortextModel"
import { PokemonV2ContesteffectflavortextModelSelector } from "./PokemonV2ContesteffectflavortextModel.base"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectBase
 * auto generated base class for the model PokemonV2ContesteffectModel.
 *
 * columns and relationships of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectModelBase = ModelBase
  .named('PokemonV2Contesteffect')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect"), "pokemon_v2_contesteffect"),
    appeal: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    jam: types.union(types.undefined, types.integer),
    /** An array relationship */
    pokemon_v2_contesteffecteffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffecteffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_contesteffecteffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesteffecteffecttextAggregateModel)),
    /** An array relationship */
    pokemon_v2_contesteffectflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffectflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_contesteffectflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesteffectflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectModelSelector extends QueryBuilder {
  get appeal() { return this.__attr(`appeal`) }
  get id() { return this.__attr(`id`) }
  get jam() { return this.__attr(`jam`) }
  pokemon_v2_contesteffecteffecttexts(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttexts`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
  pokemon_v2_contesteffecteffecttexts_aggregate(builder?: string | PokemonV2ContesteffecteffecttextAggregateModelSelector | ((selector: PokemonV2ContesteffecteffecttextAggregateModelSelector) => PokemonV2ContesteffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffecteffecttexts_aggregate`, PokemonV2ContesteffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_contesteffectflavortexts(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortexts`, PokemonV2ContesteffectflavortextModelSelector, builder) }
  pokemon_v2_contesteffectflavortexts_aggregate(builder?: string | PokemonV2ContesteffectflavortextAggregateModelSelector | ((selector: PokemonV2ContesteffectflavortextAggregateModelSelector) => PokemonV2ContesteffectflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_contesteffectflavortexts_aggregate`, PokemonV2ContesteffectflavortextAggregateModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Contesteffect() {
  return new PokemonV2ContesteffectModelSelector()
}

export const pokemonV2ContesteffectModelPrimitives = selectFromPokemonV2Contesteffect().appeal.jam
