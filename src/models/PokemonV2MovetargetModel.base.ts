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
import { PokemonV2MovetargetdescriptionAggregateModel, PokemonV2MovetargetdescriptionAggregateModelType } from "./PokemonV2MovetargetdescriptionAggregateModel"
import { PokemonV2MovetargetdescriptionAggregateModelSelector } from "./PokemonV2MovetargetdescriptionAggregateModel.base"
import { PokemonV2MovetargetdescriptionModel, PokemonV2MovetargetdescriptionModelType } from "./PokemonV2MovetargetdescriptionModel"
import { PokemonV2MovetargetdescriptionModelSelector } from "./PokemonV2MovetargetdescriptionModel.base"
import { PokemonV2MovetargetnameAggregateModel, PokemonV2MovetargetnameAggregateModelType } from "./PokemonV2MovetargetnameAggregateModel"
import { PokemonV2MovetargetnameAggregateModelSelector } from "./PokemonV2MovetargetnameAggregateModel.base"
import { PokemonV2MovetargetnameModel, PokemonV2MovetargetnameModelType } from "./PokemonV2MovetargetnameModel"
import { PokemonV2MovetargetnameModelSelector } from "./PokemonV2MovetargetnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetBase
 * auto generated base class for the model PokemonV2MovetargetModel.
 *
 * columns and relationships of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetModelBase = ModelBase
  .named('PokemonV2Movetarget')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget"), "pokemon_v2_movetarget"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_movetargetdescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetdescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_movetargetdescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovetargetdescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_movetargetnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetnameModel))),
    /** An aggregate relationship */
    pokemon_v2_movetargetnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovetargetnameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_movetargetdescriptions(builder?: string | PokemonV2MovetargetdescriptionModelSelector | ((selector: PokemonV2MovetargetdescriptionModelSelector) => PokemonV2MovetargetdescriptionModelSelector)) { return this.__child(`pokemon_v2_movetargetdescriptions`, PokemonV2MovetargetdescriptionModelSelector, builder) }
  pokemon_v2_movetargetdescriptions_aggregate(builder?: string | PokemonV2MovetargetdescriptionAggregateModelSelector | ((selector: PokemonV2MovetargetdescriptionAggregateModelSelector) => PokemonV2MovetargetdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetdescriptions_aggregate`, PokemonV2MovetargetdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movetargetnames(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`pokemon_v2_movetargetnames`, PokemonV2MovetargetnameModelSelector, builder) }
  pokemon_v2_movetargetnames_aggregate(builder?: string | PokemonV2MovetargetnameAggregateModelSelector | ((selector: PokemonV2MovetargetnameAggregateModelSelector) => PokemonV2MovetargetnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movetargetnames_aggregate`, PokemonV2MovetargetnameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movetarget() {
  return new PokemonV2MovetargetModelSelector()
}

export const pokemonV2MovetargetModelPrimitives = selectFromPokemonV2Movetarget().name
