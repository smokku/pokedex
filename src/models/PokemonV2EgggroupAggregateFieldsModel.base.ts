/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupAvgFieldsModel, PokemonV2EgggroupAvgFieldsModelType } from "./PokemonV2EgggroupAvgFieldsModel"
import { PokemonV2EgggroupAvgFieldsModelSelector } from "./PokemonV2EgggroupAvgFieldsModel.base"
import { PokemonV2EgggroupMaxFieldsModel, PokemonV2EgggroupMaxFieldsModelType } from "./PokemonV2EgggroupMaxFieldsModel"
import { PokemonV2EgggroupMaxFieldsModelSelector } from "./PokemonV2EgggroupMaxFieldsModel.base"
import { PokemonV2EgggroupMinFieldsModel, PokemonV2EgggroupMinFieldsModelType } from "./PokemonV2EgggroupMinFieldsModel"
import { PokemonV2EgggroupMinFieldsModelSelector } from "./PokemonV2EgggroupMinFieldsModel.base"
import { PokemonV2EgggroupStddevFieldsModel, PokemonV2EgggroupStddevFieldsModelType } from "./PokemonV2EgggroupStddevFieldsModel"
import { PokemonV2EgggroupStddevFieldsModelSelector } from "./PokemonV2EgggroupStddevFieldsModel.base"
import { PokemonV2EgggroupStddevPopFieldsModel, PokemonV2EgggroupStddevPopFieldsModelType } from "./PokemonV2EgggroupStddevPopFieldsModel"
import { PokemonV2EgggroupStddevPopFieldsModelSelector } from "./PokemonV2EgggroupStddevPopFieldsModel.base"
import { PokemonV2EgggroupStddevSampFieldsModel, PokemonV2EgggroupStddevSampFieldsModelType } from "./PokemonV2EgggroupStddevSampFieldsModel"
import { PokemonV2EgggroupStddevSampFieldsModelSelector } from "./PokemonV2EgggroupStddevSampFieldsModel.base"
import { PokemonV2EgggroupSumFieldsModel, PokemonV2EgggroupSumFieldsModelType } from "./PokemonV2EgggroupSumFieldsModel"
import { PokemonV2EgggroupSumFieldsModelSelector } from "./PokemonV2EgggroupSumFieldsModel.base"
import { PokemonV2EgggroupVarPopFieldsModel, PokemonV2EgggroupVarPopFieldsModelType } from "./PokemonV2EgggroupVarPopFieldsModel"
import { PokemonV2EgggroupVarPopFieldsModelSelector } from "./PokemonV2EgggroupVarPopFieldsModel.base"
import { PokemonV2EgggroupVarSampFieldsModel, PokemonV2EgggroupVarSampFieldsModelType } from "./PokemonV2EgggroupVarSampFieldsModel"
import { PokemonV2EgggroupVarSampFieldsModelSelector } from "./PokemonV2EgggroupVarSampFieldsModel.base"
import { PokemonV2EgggroupVarianceFieldsModel, PokemonV2EgggroupVarianceFieldsModelType } from "./PokemonV2EgggroupVarianceFieldsModel"
import { PokemonV2EgggroupVarianceFieldsModelSelector } from "./PokemonV2EgggroupVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupAggregateFieldsBase
 * auto generated base class for the model PokemonV2EgggroupAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroup_aggregate_fields"), "pokemon_v2_egggroup_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EgggroupAvgFieldsModelSelector | ((selector: PokemonV2EgggroupAvgFieldsModelSelector) => PokemonV2EgggroupAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EgggroupAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EgggroupMaxFieldsModelSelector | ((selector: PokemonV2EgggroupMaxFieldsModelSelector) => PokemonV2EgggroupMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EgggroupMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EgggroupMinFieldsModelSelector | ((selector: PokemonV2EgggroupMinFieldsModelSelector) => PokemonV2EgggroupMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EgggroupMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EgggroupStddevFieldsModelSelector | ((selector: PokemonV2EgggroupStddevFieldsModelSelector) => PokemonV2EgggroupStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EgggroupStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EgggroupStddevPopFieldsModelSelector | ((selector: PokemonV2EgggroupStddevPopFieldsModelSelector) => PokemonV2EgggroupStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EgggroupStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EgggroupStddevSampFieldsModelSelector | ((selector: PokemonV2EgggroupStddevSampFieldsModelSelector) => PokemonV2EgggroupStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EgggroupStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EgggroupSumFieldsModelSelector | ((selector: PokemonV2EgggroupSumFieldsModelSelector) => PokemonV2EgggroupSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EgggroupSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EgggroupVarPopFieldsModelSelector | ((selector: PokemonV2EgggroupVarPopFieldsModelSelector) => PokemonV2EgggroupVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EgggroupVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EgggroupVarSampFieldsModelSelector | ((selector: PokemonV2EgggroupVarSampFieldsModelSelector) => PokemonV2EgggroupVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EgggroupVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EgggroupVarianceFieldsModelSelector | ((selector: PokemonV2EgggroupVarianceFieldsModelSelector) => PokemonV2EgggroupVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EgggroupVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EgggroupAggregateFields() {
  return new PokemonV2EgggroupAggregateFieldsModelSelector()
}

export const pokemonV2EgggroupAggregateFieldsModelPrimitives = selectFromPokemonV2EgggroupAggregateFields().count
