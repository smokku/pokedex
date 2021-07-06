/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NatureAvgFieldsModel, PokemonV2NatureAvgFieldsModelType } from "./PokemonV2NatureAvgFieldsModel"
import { PokemonV2NatureAvgFieldsModelSelector } from "./PokemonV2NatureAvgFieldsModel.base"
import { PokemonV2NatureMaxFieldsModel, PokemonV2NatureMaxFieldsModelType } from "./PokemonV2NatureMaxFieldsModel"
import { PokemonV2NatureMaxFieldsModelSelector } from "./PokemonV2NatureMaxFieldsModel.base"
import { PokemonV2NatureMinFieldsModel, PokemonV2NatureMinFieldsModelType } from "./PokemonV2NatureMinFieldsModel"
import { PokemonV2NatureMinFieldsModelSelector } from "./PokemonV2NatureMinFieldsModel.base"
import { PokemonV2NatureStddevFieldsModel, PokemonV2NatureStddevFieldsModelType } from "./PokemonV2NatureStddevFieldsModel"
import { PokemonV2NatureStddevFieldsModelSelector } from "./PokemonV2NatureStddevFieldsModel.base"
import { PokemonV2NatureStddevPopFieldsModel, PokemonV2NatureStddevPopFieldsModelType } from "./PokemonV2NatureStddevPopFieldsModel"
import { PokemonV2NatureStddevPopFieldsModelSelector } from "./PokemonV2NatureStddevPopFieldsModel.base"
import { PokemonV2NatureStddevSampFieldsModel, PokemonV2NatureStddevSampFieldsModelType } from "./PokemonV2NatureStddevSampFieldsModel"
import { PokemonV2NatureStddevSampFieldsModelSelector } from "./PokemonV2NatureStddevSampFieldsModel.base"
import { PokemonV2NatureSumFieldsModel, PokemonV2NatureSumFieldsModelType } from "./PokemonV2NatureSumFieldsModel"
import { PokemonV2NatureSumFieldsModelSelector } from "./PokemonV2NatureSumFieldsModel.base"
import { PokemonV2NatureVarPopFieldsModel, PokemonV2NatureVarPopFieldsModelType } from "./PokemonV2NatureVarPopFieldsModel"
import { PokemonV2NatureVarPopFieldsModelSelector } from "./PokemonV2NatureVarPopFieldsModel.base"
import { PokemonV2NatureVarSampFieldsModel, PokemonV2NatureVarSampFieldsModelType } from "./PokemonV2NatureVarSampFieldsModel"
import { PokemonV2NatureVarSampFieldsModelSelector } from "./PokemonV2NatureVarSampFieldsModel.base"
import { PokemonV2NatureVarianceFieldsModel, PokemonV2NatureVarianceFieldsModelType } from "./PokemonV2NatureVarianceFieldsModel"
import { PokemonV2NatureVarianceFieldsModelSelector } from "./PokemonV2NatureVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureAggregateFieldsBase
 * auto generated base class for the model PokemonV2NatureAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_nature"
 */
export const PokemonV2NatureAggregateFieldsModelBase = ModelBase
  .named('PokemonV2NatureAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature_aggregate_fields"), "pokemon_v2_nature_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NatureAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2NatureAvgFieldsModelSelector | ((selector: PokemonV2NatureAvgFieldsModelSelector) => PokemonV2NatureAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2NatureAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2NatureMaxFieldsModelSelector | ((selector: PokemonV2NatureMaxFieldsModelSelector) => PokemonV2NatureMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2NatureMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2NatureMinFieldsModelSelector | ((selector: PokemonV2NatureMinFieldsModelSelector) => PokemonV2NatureMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2NatureMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2NatureStddevFieldsModelSelector | ((selector: PokemonV2NatureStddevFieldsModelSelector) => PokemonV2NatureStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2NatureStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2NatureStddevPopFieldsModelSelector | ((selector: PokemonV2NatureStddevPopFieldsModelSelector) => PokemonV2NatureStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2NatureStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2NatureStddevSampFieldsModelSelector | ((selector: PokemonV2NatureStddevSampFieldsModelSelector) => PokemonV2NatureStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2NatureStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2NatureSumFieldsModelSelector | ((selector: PokemonV2NatureSumFieldsModelSelector) => PokemonV2NatureSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2NatureSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2NatureVarPopFieldsModelSelector | ((selector: PokemonV2NatureVarPopFieldsModelSelector) => PokemonV2NatureVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2NatureVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2NatureVarSampFieldsModelSelector | ((selector: PokemonV2NatureVarSampFieldsModelSelector) => PokemonV2NatureVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2NatureVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2NatureVarianceFieldsModelSelector | ((selector: PokemonV2NatureVarianceFieldsModelSelector) => PokemonV2NatureVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2NatureVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2NatureAggregateFields() {
  return new PokemonV2NatureAggregateFieldsModelSelector()
}

export const pokemonV2NatureAggregateFieldsModelPrimitives = selectFromPokemonV2NatureAggregateFields().count
