/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonabilityAvgFieldsModel, PokemonV2PokemonabilityAvgFieldsModelType } from "./PokemonV2PokemonabilityAvgFieldsModel"
import { PokemonV2PokemonabilityAvgFieldsModelSelector } from "./PokemonV2PokemonabilityAvgFieldsModel.base"
import { PokemonV2PokemonabilityMaxFieldsModel, PokemonV2PokemonabilityMaxFieldsModelType } from "./PokemonV2PokemonabilityMaxFieldsModel"
import { PokemonV2PokemonabilityMaxFieldsModelSelector } from "./PokemonV2PokemonabilityMaxFieldsModel.base"
import { PokemonV2PokemonabilityMinFieldsModel, PokemonV2PokemonabilityMinFieldsModelType } from "./PokemonV2PokemonabilityMinFieldsModel"
import { PokemonV2PokemonabilityMinFieldsModelSelector } from "./PokemonV2PokemonabilityMinFieldsModel.base"
import { PokemonV2PokemonabilityStddevFieldsModel, PokemonV2PokemonabilityStddevFieldsModelType } from "./PokemonV2PokemonabilityStddevFieldsModel"
import { PokemonV2PokemonabilityStddevFieldsModelSelector } from "./PokemonV2PokemonabilityStddevFieldsModel.base"
import { PokemonV2PokemonabilityStddevPopFieldsModel, PokemonV2PokemonabilityStddevPopFieldsModelType } from "./PokemonV2PokemonabilityStddevPopFieldsModel"
import { PokemonV2PokemonabilityStddevPopFieldsModelSelector } from "./PokemonV2PokemonabilityStddevPopFieldsModel.base"
import { PokemonV2PokemonabilityStddevSampFieldsModel, PokemonV2PokemonabilityStddevSampFieldsModelType } from "./PokemonV2PokemonabilityStddevSampFieldsModel"
import { PokemonV2PokemonabilityStddevSampFieldsModelSelector } from "./PokemonV2PokemonabilityStddevSampFieldsModel.base"
import { PokemonV2PokemonabilitySumFieldsModel, PokemonV2PokemonabilitySumFieldsModelType } from "./PokemonV2PokemonabilitySumFieldsModel"
import { PokemonV2PokemonabilitySumFieldsModelSelector } from "./PokemonV2PokemonabilitySumFieldsModel.base"
import { PokemonV2PokemonabilityVarPopFieldsModel, PokemonV2PokemonabilityVarPopFieldsModelType } from "./PokemonV2PokemonabilityVarPopFieldsModel"
import { PokemonV2PokemonabilityVarPopFieldsModelSelector } from "./PokemonV2PokemonabilityVarPopFieldsModel.base"
import { PokemonV2PokemonabilityVarSampFieldsModel, PokemonV2PokemonabilityVarSampFieldsModelType } from "./PokemonV2PokemonabilityVarSampFieldsModel"
import { PokemonV2PokemonabilityVarSampFieldsModelSelector } from "./PokemonV2PokemonabilityVarSampFieldsModel.base"
import { PokemonV2PokemonabilityVarianceFieldsModel, PokemonV2PokemonabilityVarianceFieldsModelType } from "./PokemonV2PokemonabilityVarianceFieldsModel"
import { PokemonV2PokemonabilityVarianceFieldsModelSelector } from "./PokemonV2PokemonabilityVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilityAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonabilityAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonabilityAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability_aggregate_fields"), "pokemon_v2_pokemonability_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilitySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonabilityAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonabilityAvgFieldsModelSelector | ((selector: PokemonV2PokemonabilityAvgFieldsModelSelector) => PokemonV2PokemonabilityAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonabilityAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonabilityMaxFieldsModelSelector | ((selector: PokemonV2PokemonabilityMaxFieldsModelSelector) => PokemonV2PokemonabilityMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonabilityMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonabilityMinFieldsModelSelector | ((selector: PokemonV2PokemonabilityMinFieldsModelSelector) => PokemonV2PokemonabilityMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonabilityMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonabilityStddevFieldsModelSelector | ((selector: PokemonV2PokemonabilityStddevFieldsModelSelector) => PokemonV2PokemonabilityStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonabilityStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonabilityStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonabilityStddevPopFieldsModelSelector) => PokemonV2PokemonabilityStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonabilityStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonabilityStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonabilityStddevSampFieldsModelSelector) => PokemonV2PokemonabilityStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonabilityStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonabilitySumFieldsModelSelector | ((selector: PokemonV2PokemonabilitySumFieldsModelSelector) => PokemonV2PokemonabilitySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonabilitySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonabilityVarPopFieldsModelSelector | ((selector: PokemonV2PokemonabilityVarPopFieldsModelSelector) => PokemonV2PokemonabilityVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonabilityVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonabilityVarSampFieldsModelSelector | ((selector: PokemonV2PokemonabilityVarSampFieldsModelSelector) => PokemonV2PokemonabilityVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonabilityVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonabilityVarianceFieldsModelSelector | ((selector: PokemonV2PokemonabilityVarianceFieldsModelSelector) => PokemonV2PokemonabilityVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonabilityVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonabilityAggregateFields() {
  return new PokemonV2PokemonabilityAggregateFieldsModelSelector()
}

export const pokemonV2PokemonabilityAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonabilityAggregateFields().count
