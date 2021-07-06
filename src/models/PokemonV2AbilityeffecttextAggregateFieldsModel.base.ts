/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityeffecttextAvgFieldsModel, PokemonV2AbilityeffecttextAvgFieldsModelType } from "./PokemonV2AbilityeffecttextAvgFieldsModel"
import { PokemonV2AbilityeffecttextAvgFieldsModelSelector } from "./PokemonV2AbilityeffecttextAvgFieldsModel.base"
import { PokemonV2AbilityeffecttextMaxFieldsModel, PokemonV2AbilityeffecttextMaxFieldsModelType } from "./PokemonV2AbilityeffecttextMaxFieldsModel"
import { PokemonV2AbilityeffecttextMaxFieldsModelSelector } from "./PokemonV2AbilityeffecttextMaxFieldsModel.base"
import { PokemonV2AbilityeffecttextMinFieldsModel, PokemonV2AbilityeffecttextMinFieldsModelType } from "./PokemonV2AbilityeffecttextMinFieldsModel"
import { PokemonV2AbilityeffecttextMinFieldsModelSelector } from "./PokemonV2AbilityeffecttextMinFieldsModel.base"
import { PokemonV2AbilityeffecttextStddevFieldsModel, PokemonV2AbilityeffecttextStddevFieldsModelType } from "./PokemonV2AbilityeffecttextStddevFieldsModel"
import { PokemonV2AbilityeffecttextStddevFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevFieldsModel.base"
import { PokemonV2AbilityeffecttextStddevPopFieldsModel, PokemonV2AbilityeffecttextStddevPopFieldsModelType } from "./PokemonV2AbilityeffecttextStddevPopFieldsModel"
import { PokemonV2AbilityeffecttextStddevPopFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevPopFieldsModel.base"
import { PokemonV2AbilityeffecttextStddevSampFieldsModel, PokemonV2AbilityeffecttextStddevSampFieldsModelType } from "./PokemonV2AbilityeffecttextStddevSampFieldsModel"
import { PokemonV2AbilityeffecttextStddevSampFieldsModelSelector } from "./PokemonV2AbilityeffecttextStddevSampFieldsModel.base"
import { PokemonV2AbilityeffecttextSumFieldsModel, PokemonV2AbilityeffecttextSumFieldsModelType } from "./PokemonV2AbilityeffecttextSumFieldsModel"
import { PokemonV2AbilityeffecttextSumFieldsModelSelector } from "./PokemonV2AbilityeffecttextSumFieldsModel.base"
import { PokemonV2AbilityeffecttextVarPopFieldsModel, PokemonV2AbilityeffecttextVarPopFieldsModelType } from "./PokemonV2AbilityeffecttextVarPopFieldsModel"
import { PokemonV2AbilityeffecttextVarPopFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarPopFieldsModel.base"
import { PokemonV2AbilityeffecttextVarSampFieldsModel, PokemonV2AbilityeffecttextVarSampFieldsModelType } from "./PokemonV2AbilityeffecttextVarSampFieldsModel"
import { PokemonV2AbilityeffecttextVarSampFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarSampFieldsModel.base"
import { PokemonV2AbilityeffecttextVarianceFieldsModel, PokemonV2AbilityeffecttextVarianceFieldsModelType } from "./PokemonV2AbilityeffecttextVarianceFieldsModel"
import { PokemonV2AbilityeffecttextVarianceFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_aggregate_fields"), "pokemon_v2_abilityeffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityeffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilityeffecttextAvgFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextAvgFieldsModelSelector) => PokemonV2AbilityeffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilityeffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilityeffecttextMaxFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextMaxFieldsModelSelector) => PokemonV2AbilityeffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilityeffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilityeffecttextMinFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextMinFieldsModelSelector) => PokemonV2AbilityeffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilityeffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilityeffecttextStddevFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextStddevFieldsModelSelector) => PokemonV2AbilityeffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilityeffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilityeffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextStddevPopFieldsModelSelector) => PokemonV2AbilityeffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilityeffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilityeffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextStddevSampFieldsModelSelector) => PokemonV2AbilityeffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilityeffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilityeffecttextSumFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextSumFieldsModelSelector) => PokemonV2AbilityeffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilityeffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilityeffecttextVarPopFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextVarPopFieldsModelSelector) => PokemonV2AbilityeffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilityeffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilityeffecttextVarSampFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextVarSampFieldsModelSelector) => PokemonV2AbilityeffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilityeffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilityeffecttextVarianceFieldsModelSelector | ((selector: PokemonV2AbilityeffecttextVarianceFieldsModelSelector) => PokemonV2AbilityeffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilityeffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilityeffecttextAggregateFields() {
  return new PokemonV2AbilityeffecttextAggregateFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextAggregateFields().count
