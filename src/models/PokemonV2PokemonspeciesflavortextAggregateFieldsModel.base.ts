/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesflavortextAvgFieldsModel, PokemonV2PokemonspeciesflavortextAvgFieldsModelType } from "./PokemonV2PokemonspeciesflavortextAvgFieldsModel"
import { PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextAvgFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextMaxFieldsModel, PokemonV2PokemonspeciesflavortextMaxFieldsModelType } from "./PokemonV2PokemonspeciesflavortextMaxFieldsModel"
import { PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextMaxFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextMinFieldsModel, PokemonV2PokemonspeciesflavortextMinFieldsModelType } from "./PokemonV2PokemonspeciesflavortextMinFieldsModel"
import { PokemonV2PokemonspeciesflavortextMinFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextMinFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextStddevFieldsModel, PokemonV2PokemonspeciesflavortextStddevFieldsModelType } from "./PokemonV2PokemonspeciesflavortextStddevFieldsModel"
import { PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextStddevPopFieldsModel, PokemonV2PokemonspeciesflavortextStddevPopFieldsModelType } from "./PokemonV2PokemonspeciesflavortextStddevPopFieldsModel"
import { PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevPopFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextStddevSampFieldsModel, PokemonV2PokemonspeciesflavortextStddevSampFieldsModelType } from "./PokemonV2PokemonspeciesflavortextStddevSampFieldsModel"
import { PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextStddevSampFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextSumFieldsModel, PokemonV2PokemonspeciesflavortextSumFieldsModelType } from "./PokemonV2PokemonspeciesflavortextSumFieldsModel"
import { PokemonV2PokemonspeciesflavortextSumFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextSumFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextVarPopFieldsModel, PokemonV2PokemonspeciesflavortextVarPopFieldsModelType } from "./PokemonV2PokemonspeciesflavortextVarPopFieldsModel"
import { PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarPopFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextVarSampFieldsModel, PokemonV2PokemonspeciesflavortextVarSampFieldsModelType } from "./PokemonV2PokemonspeciesflavortextVarSampFieldsModel"
import { PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarSampFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextVarianceFieldsModel, PokemonV2PokemonspeciesflavortextVarianceFieldsModelType } from "./PokemonV2PokemonspeciesflavortextVarianceFieldsModel"
import { PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_aggregate_fields"), "pokemon_v2_pokemonspeciesflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector) => PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonspeciesflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector) => PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonspeciesflavortextMinFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextMinFieldsModelSelector) => PokemonV2PokemonspeciesflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonspeciesflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector) => PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector) => PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector) => PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonspeciesflavortextSumFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextSumFieldsModelSelector) => PokemonV2PokemonspeciesflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonspeciesflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector) => PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonspeciesflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector) => PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonspeciesflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector) => PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonspeciesflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesflavortextAggregateFields() {
  return new PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextAggregateFields().count
