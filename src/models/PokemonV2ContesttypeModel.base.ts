/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavorAggregateModel, PokemonV2BerryflavorAggregateModelType } from "./PokemonV2BerryflavorAggregateModel"
import { PokemonV2BerryflavorAggregateModelSelector } from "./PokemonV2BerryflavorAggregateModel.base"
import { PokemonV2BerryflavorModel, PokemonV2BerryflavorModelType } from "./PokemonV2BerryflavorModel"
import { PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"
import { PokemonV2ContesttypenameAggregateModel, PokemonV2ContesttypenameAggregateModelType } from "./PokemonV2ContesttypenameAggregateModel"
import { PokemonV2ContesttypenameAggregateModelSelector } from "./PokemonV2ContesttypenameAggregateModel.base"
import { PokemonV2ContesttypenameModel, PokemonV2ContesttypenameModelType } from "./PokemonV2ContesttypenameModel"
import { PokemonV2ContesttypenameModelSelector } from "./PokemonV2ContesttypenameModel.base"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeBase
 * auto generated base class for the model PokemonV2ContesttypeModel.
 *
 * columns and relationships of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeModelBase = ModelBase
  .named('PokemonV2Contesttype')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype"), "pokemon_v2_contesttype"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_berryflavors: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavorModel))),
    /** An aggregate relationship */
    pokemon_v2_berryflavors_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavorAggregateModel)),
    /** An array relationship */
    pokemon_v2_contesttypenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesttypenameModel))),
    /** An aggregate relationship */
    pokemon_v2_contesttypenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ContesttypenameAggregateModel)),
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

export class PokemonV2ContesttypeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_berryflavors(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`pokemon_v2_berryflavors`, PokemonV2BerryflavorModelSelector, builder) }
  pokemon_v2_berryflavors_aggregate(builder?: string | PokemonV2BerryflavorAggregateModelSelector | ((selector: PokemonV2BerryflavorAggregateModelSelector) => PokemonV2BerryflavorAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavors_aggregate`, PokemonV2BerryflavorAggregateModelSelector, builder) }
  pokemon_v2_contesttypenames(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`pokemon_v2_contesttypenames`, PokemonV2ContesttypenameModelSelector, builder) }
  pokemon_v2_contesttypenames_aggregate(builder?: string | PokemonV2ContesttypenameAggregateModelSelector | ((selector: PokemonV2ContesttypenameAggregateModelSelector) => PokemonV2ContesttypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_contesttypenames_aggregate`, PokemonV2ContesttypenameAggregateModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Contesttype() {
  return new PokemonV2ContesttypeModelSelector()
}

export const pokemonV2ContesttypeModelPrimitives = selectFromPokemonV2Contesttype().name
