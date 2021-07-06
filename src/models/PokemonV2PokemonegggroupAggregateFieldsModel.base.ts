/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonegggroupAvgFieldsModel, PokemonV2PokemonegggroupAvgFieldsModelType } from "./PokemonV2PokemonegggroupAvgFieldsModel"
import { PokemonV2PokemonegggroupAvgFieldsModelSelector } from "./PokemonV2PokemonegggroupAvgFieldsModel.base"
import { PokemonV2PokemonegggroupMaxFieldsModel, PokemonV2PokemonegggroupMaxFieldsModelType } from "./PokemonV2PokemonegggroupMaxFieldsModel"
import { PokemonV2PokemonegggroupMaxFieldsModelSelector } from "./PokemonV2PokemonegggroupMaxFieldsModel.base"
import { PokemonV2PokemonegggroupMinFieldsModel, PokemonV2PokemonegggroupMinFieldsModelType } from "./PokemonV2PokemonegggroupMinFieldsModel"
import { PokemonV2PokemonegggroupMinFieldsModelSelector } from "./PokemonV2PokemonegggroupMinFieldsModel.base"
import { PokemonV2PokemonegggroupStddevFieldsModel, PokemonV2PokemonegggroupStddevFieldsModelType } from "./PokemonV2PokemonegggroupStddevFieldsModel"
import { PokemonV2PokemonegggroupStddevFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevFieldsModel.base"
import { PokemonV2PokemonegggroupStddevPopFieldsModel, PokemonV2PokemonegggroupStddevPopFieldsModelType } from "./PokemonV2PokemonegggroupStddevPopFieldsModel"
import { PokemonV2PokemonegggroupStddevPopFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevPopFieldsModel.base"
import { PokemonV2PokemonegggroupStddevSampFieldsModel, PokemonV2PokemonegggroupStddevSampFieldsModelType } from "./PokemonV2PokemonegggroupStddevSampFieldsModel"
import { PokemonV2PokemonegggroupStddevSampFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevSampFieldsModel.base"
import { PokemonV2PokemonegggroupSumFieldsModel, PokemonV2PokemonegggroupSumFieldsModelType } from "./PokemonV2PokemonegggroupSumFieldsModel"
import { PokemonV2PokemonegggroupSumFieldsModelSelector } from "./PokemonV2PokemonegggroupSumFieldsModel.base"
import { PokemonV2PokemonegggroupVarPopFieldsModel, PokemonV2PokemonegggroupVarPopFieldsModelType } from "./PokemonV2PokemonegggroupVarPopFieldsModel"
import { PokemonV2PokemonegggroupVarPopFieldsModelSelector } from "./PokemonV2PokemonegggroupVarPopFieldsModel.base"
import { PokemonV2PokemonegggroupVarSampFieldsModel, PokemonV2PokemonegggroupVarSampFieldsModelType } from "./PokemonV2PokemonegggroupVarSampFieldsModel"
import { PokemonV2PokemonegggroupVarSampFieldsModelSelector } from "./PokemonV2PokemonegggroupVarSampFieldsModel.base"
import { PokemonV2PokemonegggroupVarianceFieldsModel, PokemonV2PokemonegggroupVarianceFieldsModelType } from "./PokemonV2PokemonegggroupVarianceFieldsModel"
import { PokemonV2PokemonegggroupVarianceFieldsModelSelector } from "./PokemonV2PokemonegggroupVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonegggroupAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonegggroupAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_aggregate_fields"), "pokemon_v2_pokemonegggroup_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonegggroupVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonegggroupAvgFieldsModelSelector | ((selector: PokemonV2PokemonegggroupAvgFieldsModelSelector) => PokemonV2PokemonegggroupAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonegggroupAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonegggroupMaxFieldsModelSelector | ((selector: PokemonV2PokemonegggroupMaxFieldsModelSelector) => PokemonV2PokemonegggroupMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonegggroupMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonegggroupMinFieldsModelSelector | ((selector: PokemonV2PokemonegggroupMinFieldsModelSelector) => PokemonV2PokemonegggroupMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonegggroupMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonegggroupStddevFieldsModelSelector | ((selector: PokemonV2PokemonegggroupStddevFieldsModelSelector) => PokemonV2PokemonegggroupStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonegggroupStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonegggroupStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonegggroupStddevPopFieldsModelSelector) => PokemonV2PokemonegggroupStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonegggroupStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonegggroupStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonegggroupStddevSampFieldsModelSelector) => PokemonV2PokemonegggroupStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonegggroupStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonegggroupSumFieldsModelSelector | ((selector: PokemonV2PokemonegggroupSumFieldsModelSelector) => PokemonV2PokemonegggroupSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonegggroupSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonegggroupVarPopFieldsModelSelector | ((selector: PokemonV2PokemonegggroupVarPopFieldsModelSelector) => PokemonV2PokemonegggroupVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonegggroupVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonegggroupVarSampFieldsModelSelector | ((selector: PokemonV2PokemonegggroupVarSampFieldsModelSelector) => PokemonV2PokemonegggroupVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonegggroupVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonegggroupVarianceFieldsModelSelector | ((selector: PokemonV2PokemonegggroupVarianceFieldsModelSelector) => PokemonV2PokemonegggroupVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonegggroupVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonegggroupAggregateFields() {
  return new PokemonV2PokemonegggroupAggregateFieldsModelSelector()
}

export const pokemonV2PokemonegggroupAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonegggroupAggregateFields().count
