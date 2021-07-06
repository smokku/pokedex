/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityAvgFieldsModel, PokemonV2AbilityAvgFieldsModelType } from "./PokemonV2AbilityAvgFieldsModel"
import { PokemonV2AbilityAvgFieldsModelSelector } from "./PokemonV2AbilityAvgFieldsModel.base"
import { PokemonV2AbilityMaxFieldsModel, PokemonV2AbilityMaxFieldsModelType } from "./PokemonV2AbilityMaxFieldsModel"
import { PokemonV2AbilityMaxFieldsModelSelector } from "./PokemonV2AbilityMaxFieldsModel.base"
import { PokemonV2AbilityMinFieldsModel, PokemonV2AbilityMinFieldsModelType } from "./PokemonV2AbilityMinFieldsModel"
import { PokemonV2AbilityMinFieldsModelSelector } from "./PokemonV2AbilityMinFieldsModel.base"
import { PokemonV2AbilityStddevFieldsModel, PokemonV2AbilityStddevFieldsModelType } from "./PokemonV2AbilityStddevFieldsModel"
import { PokemonV2AbilityStddevFieldsModelSelector } from "./PokemonV2AbilityStddevFieldsModel.base"
import { PokemonV2AbilityStddevPopFieldsModel, PokemonV2AbilityStddevPopFieldsModelType } from "./PokemonV2AbilityStddevPopFieldsModel"
import { PokemonV2AbilityStddevPopFieldsModelSelector } from "./PokemonV2AbilityStddevPopFieldsModel.base"
import { PokemonV2AbilityStddevSampFieldsModel, PokemonV2AbilityStddevSampFieldsModelType } from "./PokemonV2AbilityStddevSampFieldsModel"
import { PokemonV2AbilityStddevSampFieldsModelSelector } from "./PokemonV2AbilityStddevSampFieldsModel.base"
import { PokemonV2AbilitySumFieldsModel, PokemonV2AbilitySumFieldsModelType } from "./PokemonV2AbilitySumFieldsModel"
import { PokemonV2AbilitySumFieldsModelSelector } from "./PokemonV2AbilitySumFieldsModel.base"
import { PokemonV2AbilityVarPopFieldsModel, PokemonV2AbilityVarPopFieldsModelType } from "./PokemonV2AbilityVarPopFieldsModel"
import { PokemonV2AbilityVarPopFieldsModelSelector } from "./PokemonV2AbilityVarPopFieldsModel.base"
import { PokemonV2AbilityVarSampFieldsModel, PokemonV2AbilityVarSampFieldsModelType } from "./PokemonV2AbilityVarSampFieldsModel"
import { PokemonV2AbilityVarSampFieldsModelSelector } from "./PokemonV2AbilityVarSampFieldsModel.base"
import { PokemonV2AbilityVarianceFieldsModel, PokemonV2AbilityVarianceFieldsModelType } from "./PokemonV2AbilityVarianceFieldsModel"
import { PokemonV2AbilityVarianceFieldsModelSelector } from "./PokemonV2AbilityVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilityAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_ability"
 */
export const PokemonV2AbilityAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilityAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_aggregate_fields"), "pokemon_v2_ability_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilityAvgFieldsModelSelector | ((selector: PokemonV2AbilityAvgFieldsModelSelector) => PokemonV2AbilityAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilityAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilityMaxFieldsModelSelector | ((selector: PokemonV2AbilityMaxFieldsModelSelector) => PokemonV2AbilityMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilityMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilityMinFieldsModelSelector | ((selector: PokemonV2AbilityMinFieldsModelSelector) => PokemonV2AbilityMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilityMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilityStddevFieldsModelSelector | ((selector: PokemonV2AbilityStddevFieldsModelSelector) => PokemonV2AbilityStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilityStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilityStddevPopFieldsModelSelector | ((selector: PokemonV2AbilityStddevPopFieldsModelSelector) => PokemonV2AbilityStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilityStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilityStddevSampFieldsModelSelector | ((selector: PokemonV2AbilityStddevSampFieldsModelSelector) => PokemonV2AbilityStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilityStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilitySumFieldsModelSelector | ((selector: PokemonV2AbilitySumFieldsModelSelector) => PokemonV2AbilitySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilitySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilityVarPopFieldsModelSelector | ((selector: PokemonV2AbilityVarPopFieldsModelSelector) => PokemonV2AbilityVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilityVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilityVarSampFieldsModelSelector | ((selector: PokemonV2AbilityVarSampFieldsModelSelector) => PokemonV2AbilityVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilityVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilityVarianceFieldsModelSelector | ((selector: PokemonV2AbilityVarianceFieldsModelSelector) => PokemonV2AbilityVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilityVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilityAggregateFields() {
  return new PokemonV2AbilityAggregateFieldsModelSelector()
}

export const pokemonV2AbilityAggregateFieldsModelPrimitives = selectFromPokemonV2AbilityAggregateFields().count
