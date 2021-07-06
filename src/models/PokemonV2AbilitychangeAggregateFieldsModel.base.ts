/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeAvgFieldsModel, PokemonV2AbilitychangeAvgFieldsModelType } from "./PokemonV2AbilitychangeAvgFieldsModel"
import { PokemonV2AbilitychangeAvgFieldsModelSelector } from "./PokemonV2AbilitychangeAvgFieldsModel.base"
import { PokemonV2AbilitychangeMaxFieldsModel, PokemonV2AbilitychangeMaxFieldsModelType } from "./PokemonV2AbilitychangeMaxFieldsModel"
import { PokemonV2AbilitychangeMaxFieldsModelSelector } from "./PokemonV2AbilitychangeMaxFieldsModel.base"
import { PokemonV2AbilitychangeMinFieldsModel, PokemonV2AbilitychangeMinFieldsModelType } from "./PokemonV2AbilitychangeMinFieldsModel"
import { PokemonV2AbilitychangeMinFieldsModelSelector } from "./PokemonV2AbilitychangeMinFieldsModel.base"
import { PokemonV2AbilitychangeStddevFieldsModel, PokemonV2AbilitychangeStddevFieldsModelType } from "./PokemonV2AbilitychangeStddevFieldsModel"
import { PokemonV2AbilitychangeStddevFieldsModelSelector } from "./PokemonV2AbilitychangeStddevFieldsModel.base"
import { PokemonV2AbilitychangeStddevPopFieldsModel, PokemonV2AbilitychangeStddevPopFieldsModelType } from "./PokemonV2AbilitychangeStddevPopFieldsModel"
import { PokemonV2AbilitychangeStddevPopFieldsModelSelector } from "./PokemonV2AbilitychangeStddevPopFieldsModel.base"
import { PokemonV2AbilitychangeStddevSampFieldsModel, PokemonV2AbilitychangeStddevSampFieldsModelType } from "./PokemonV2AbilitychangeStddevSampFieldsModel"
import { PokemonV2AbilitychangeStddevSampFieldsModelSelector } from "./PokemonV2AbilitychangeStddevSampFieldsModel.base"
import { PokemonV2AbilitychangeSumFieldsModel, PokemonV2AbilitychangeSumFieldsModelType } from "./PokemonV2AbilitychangeSumFieldsModel"
import { PokemonV2AbilitychangeSumFieldsModelSelector } from "./PokemonV2AbilitychangeSumFieldsModel.base"
import { PokemonV2AbilitychangeVarPopFieldsModel, PokemonV2AbilitychangeVarPopFieldsModelType } from "./PokemonV2AbilitychangeVarPopFieldsModel"
import { PokemonV2AbilitychangeVarPopFieldsModelSelector } from "./PokemonV2AbilitychangeVarPopFieldsModel.base"
import { PokemonV2AbilitychangeVarSampFieldsModel, PokemonV2AbilitychangeVarSampFieldsModelType } from "./PokemonV2AbilitychangeVarSampFieldsModel"
import { PokemonV2AbilitychangeVarSampFieldsModelSelector } from "./PokemonV2AbilitychangeVarSampFieldsModel.base"
import { PokemonV2AbilitychangeVarianceFieldsModel, PokemonV2AbilitychangeVarianceFieldsModelType } from "./PokemonV2AbilitychangeVarianceFieldsModel"
import { PokemonV2AbilitychangeVarianceFieldsModelSelector } from "./PokemonV2AbilitychangeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_aggregate_fields"), "pokemon_v2_abilitychange_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilitychangeAvgFieldsModelSelector | ((selector: PokemonV2AbilitychangeAvgFieldsModelSelector) => PokemonV2AbilitychangeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilitychangeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilitychangeMaxFieldsModelSelector | ((selector: PokemonV2AbilitychangeMaxFieldsModelSelector) => PokemonV2AbilitychangeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilitychangeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilitychangeMinFieldsModelSelector | ((selector: PokemonV2AbilitychangeMinFieldsModelSelector) => PokemonV2AbilitychangeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilitychangeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilitychangeStddevFieldsModelSelector | ((selector: PokemonV2AbilitychangeStddevFieldsModelSelector) => PokemonV2AbilitychangeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilitychangeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilitychangeStddevPopFieldsModelSelector | ((selector: PokemonV2AbilitychangeStddevPopFieldsModelSelector) => PokemonV2AbilitychangeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilitychangeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilitychangeStddevSampFieldsModelSelector | ((selector: PokemonV2AbilitychangeStddevSampFieldsModelSelector) => PokemonV2AbilitychangeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilitychangeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilitychangeSumFieldsModelSelector | ((selector: PokemonV2AbilitychangeSumFieldsModelSelector) => PokemonV2AbilitychangeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilitychangeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilitychangeVarPopFieldsModelSelector | ((selector: PokemonV2AbilitychangeVarPopFieldsModelSelector) => PokemonV2AbilitychangeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilitychangeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilitychangeVarSampFieldsModelSelector | ((selector: PokemonV2AbilitychangeVarSampFieldsModelSelector) => PokemonV2AbilitychangeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilitychangeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilitychangeVarianceFieldsModelSelector | ((selector: PokemonV2AbilitychangeVarianceFieldsModelSelector) => PokemonV2AbilitychangeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilitychangeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilitychangeAggregateFields() {
  return new PokemonV2AbilitychangeAggregateFieldsModelSelector()
}

export const pokemonV2AbilitychangeAggregateFieldsModelPrimitives = selectFromPokemonV2AbilitychangeAggregateFields().count
