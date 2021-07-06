/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutionchainAvgFieldsModel, PokemonV2EvolutionchainAvgFieldsModelType } from "./PokemonV2EvolutionchainAvgFieldsModel"
import { PokemonV2EvolutionchainAvgFieldsModelSelector } from "./PokemonV2EvolutionchainAvgFieldsModel.base"
import { PokemonV2EvolutionchainMaxFieldsModel, PokemonV2EvolutionchainMaxFieldsModelType } from "./PokemonV2EvolutionchainMaxFieldsModel"
import { PokemonV2EvolutionchainMaxFieldsModelSelector } from "./PokemonV2EvolutionchainMaxFieldsModel.base"
import { PokemonV2EvolutionchainMinFieldsModel, PokemonV2EvolutionchainMinFieldsModelType } from "./PokemonV2EvolutionchainMinFieldsModel"
import { PokemonV2EvolutionchainMinFieldsModelSelector } from "./PokemonV2EvolutionchainMinFieldsModel.base"
import { PokemonV2EvolutionchainStddevFieldsModel, PokemonV2EvolutionchainStddevFieldsModelType } from "./PokemonV2EvolutionchainStddevFieldsModel"
import { PokemonV2EvolutionchainStddevFieldsModelSelector } from "./PokemonV2EvolutionchainStddevFieldsModel.base"
import { PokemonV2EvolutionchainStddevPopFieldsModel, PokemonV2EvolutionchainStddevPopFieldsModelType } from "./PokemonV2EvolutionchainStddevPopFieldsModel"
import { PokemonV2EvolutionchainStddevPopFieldsModelSelector } from "./PokemonV2EvolutionchainStddevPopFieldsModel.base"
import { PokemonV2EvolutionchainStddevSampFieldsModel, PokemonV2EvolutionchainStddevSampFieldsModelType } from "./PokemonV2EvolutionchainStddevSampFieldsModel"
import { PokemonV2EvolutionchainStddevSampFieldsModelSelector } from "./PokemonV2EvolutionchainStddevSampFieldsModel.base"
import { PokemonV2EvolutionchainSumFieldsModel, PokemonV2EvolutionchainSumFieldsModelType } from "./PokemonV2EvolutionchainSumFieldsModel"
import { PokemonV2EvolutionchainSumFieldsModelSelector } from "./PokemonV2EvolutionchainSumFieldsModel.base"
import { PokemonV2EvolutionchainVarPopFieldsModel, PokemonV2EvolutionchainVarPopFieldsModelType } from "./PokemonV2EvolutionchainVarPopFieldsModel"
import { PokemonV2EvolutionchainVarPopFieldsModelSelector } from "./PokemonV2EvolutionchainVarPopFieldsModel.base"
import { PokemonV2EvolutionchainVarSampFieldsModel, PokemonV2EvolutionchainVarSampFieldsModelType } from "./PokemonV2EvolutionchainVarSampFieldsModel"
import { PokemonV2EvolutionchainVarSampFieldsModelSelector } from "./PokemonV2EvolutionchainVarSampFieldsModel.base"
import { PokemonV2EvolutionchainVarianceFieldsModel, PokemonV2EvolutionchainVarianceFieldsModelType } from "./PokemonV2EvolutionchainVarianceFieldsModel"
import { PokemonV2EvolutionchainVarianceFieldsModelSelector } from "./PokemonV2EvolutionchainVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainAggregateFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_evolutionchain"
 */
export const PokemonV2EvolutionchainAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_aggregate_fields"), "pokemon_v2_evolutionchain_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EvolutionchainAvgFieldsModelSelector | ((selector: PokemonV2EvolutionchainAvgFieldsModelSelector) => PokemonV2EvolutionchainAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EvolutionchainAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EvolutionchainMaxFieldsModelSelector | ((selector: PokemonV2EvolutionchainMaxFieldsModelSelector) => PokemonV2EvolutionchainMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EvolutionchainMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EvolutionchainMinFieldsModelSelector | ((selector: PokemonV2EvolutionchainMinFieldsModelSelector) => PokemonV2EvolutionchainMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EvolutionchainMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EvolutionchainStddevFieldsModelSelector | ((selector: PokemonV2EvolutionchainStddevFieldsModelSelector) => PokemonV2EvolutionchainStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EvolutionchainStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EvolutionchainStddevPopFieldsModelSelector | ((selector: PokemonV2EvolutionchainStddevPopFieldsModelSelector) => PokemonV2EvolutionchainStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EvolutionchainStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EvolutionchainStddevSampFieldsModelSelector | ((selector: PokemonV2EvolutionchainStddevSampFieldsModelSelector) => PokemonV2EvolutionchainStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EvolutionchainStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EvolutionchainSumFieldsModelSelector | ((selector: PokemonV2EvolutionchainSumFieldsModelSelector) => PokemonV2EvolutionchainSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EvolutionchainSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EvolutionchainVarPopFieldsModelSelector | ((selector: PokemonV2EvolutionchainVarPopFieldsModelSelector) => PokemonV2EvolutionchainVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EvolutionchainVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EvolutionchainVarSampFieldsModelSelector | ((selector: PokemonV2EvolutionchainVarSampFieldsModelSelector) => PokemonV2EvolutionchainVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EvolutionchainVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EvolutionchainVarianceFieldsModelSelector | ((selector: PokemonV2EvolutionchainVarianceFieldsModelSelector) => PokemonV2EvolutionchainVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EvolutionchainVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EvolutionchainAggregateFields() {
  return new PokemonV2EvolutionchainAggregateFieldsModelSelector()
}

export const pokemonV2EvolutionchainAggregateFieldsModelPrimitives = selectFromPokemonV2EvolutionchainAggregateFields().count
