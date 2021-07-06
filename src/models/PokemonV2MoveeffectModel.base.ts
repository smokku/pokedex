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
import { PokemonV2MovechangeAggregateModel, PokemonV2MovechangeAggregateModelType } from "./PokemonV2MovechangeAggregateModel"
import { PokemonV2MovechangeAggregateModelSelector } from "./PokemonV2MovechangeAggregateModel.base"
import { PokemonV2MovechangeModel, PokemonV2MovechangeModelType } from "./PokemonV2MovechangeModel"
import { PokemonV2MovechangeModelSelector } from "./PokemonV2MovechangeModel.base"
import { PokemonV2MoveeffectchangeAggregateModel, PokemonV2MoveeffectchangeAggregateModelType } from "./PokemonV2MoveeffectchangeAggregateModel"
import { PokemonV2MoveeffectchangeAggregateModelSelector } from "./PokemonV2MoveeffectchangeAggregateModel.base"
import { PokemonV2MoveeffectchangeModel, PokemonV2MoveeffectchangeModelType } from "./PokemonV2MoveeffectchangeModel"
import { PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"
import { PokemonV2MoveeffecteffecttextAggregateModel, PokemonV2MoveeffecteffecttextAggregateModelType } from "./PokemonV2MoveeffecteffecttextAggregateModel"
import { PokemonV2MoveeffecteffecttextAggregateModelSelector } from "./PokemonV2MoveeffecteffecttextAggregateModel.base"
import { PokemonV2MoveeffecteffecttextModel, PokemonV2MoveeffecteffecttextModelType } from "./PokemonV2MoveeffecteffecttextModel"
import { PokemonV2MoveeffecteffecttextModelSelector } from "./PokemonV2MoveeffecteffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectBase
 * auto generated base class for the model PokemonV2MoveeffectModel.
 *
 * columns and relationships of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectModelBase = ModelBase
  .named('PokemonV2Moveeffect')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect"), "pokemon_v2_moveeffect"),
    id: types.union(types.undefined, types.integer),
    /** An array relationship */
    pokemon_v2_movechanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovechangeModel))),
    /** An aggregate relationship */
    pokemon_v2_movechanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovechangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveeffectchanges: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeModel))),
    /** An aggregate relationship */
    pokemon_v2_moveeffectchanges_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffectchangeAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveeffecteffecttexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffecteffecttextModel))),
    /** An aggregate relationship */
    pokemon_v2_moveeffecteffecttexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveeffecteffecttextAggregateModel)),
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

export class PokemonV2MoveeffectModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  pokemon_v2_movechanges(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechanges`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movechanges_aggregate(builder?: string | PokemonV2MovechangeAggregateModelSelector | ((selector: PokemonV2MovechangeAggregateModelSelector) => PokemonV2MovechangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movechanges_aggregate`, PokemonV2MovechangeAggregateModelSelector, builder) }
  pokemon_v2_moveeffectchanges(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchanges`, PokemonV2MoveeffectchangeModelSelector, builder) }
  pokemon_v2_moveeffectchanges_aggregate(builder?: string | PokemonV2MoveeffectchangeAggregateModelSelector | ((selector: PokemonV2MoveeffectchangeAggregateModelSelector) => PokemonV2MoveeffectchangeAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffectchanges_aggregate`, PokemonV2MoveeffectchangeAggregateModelSelector, builder) }
  pokemon_v2_moveeffecteffecttexts(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttexts`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
  pokemon_v2_moveeffecteffecttexts_aggregate(builder?: string | PokemonV2MoveeffecteffecttextAggregateModelSelector | ((selector: PokemonV2MoveeffecteffecttextAggregateModelSelector) => PokemonV2MoveeffecteffecttextAggregateModelSelector)) { return this.__child(`pokemon_v2_moveeffecteffecttexts_aggregate`, PokemonV2MoveeffecteffecttextAggregateModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Moveeffect() {
  return new PokemonV2MoveeffectModelSelector()
}

export const pokemonV2MoveeffectModelPrimitives = selectFromPokemonV2Moveeffect()
