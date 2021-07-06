/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetnameAvgFieldsModel, PokemonV2MovetargetnameAvgFieldsModelType } from "./PokemonV2MovetargetnameAvgFieldsModel"
import { PokemonV2MovetargetnameAvgFieldsModelSelector } from "./PokemonV2MovetargetnameAvgFieldsModel.base"
import { PokemonV2MovetargetnameMaxFieldsModel, PokemonV2MovetargetnameMaxFieldsModelType } from "./PokemonV2MovetargetnameMaxFieldsModel"
import { PokemonV2MovetargetnameMaxFieldsModelSelector } from "./PokemonV2MovetargetnameMaxFieldsModel.base"
import { PokemonV2MovetargetnameMinFieldsModel, PokemonV2MovetargetnameMinFieldsModelType } from "./PokemonV2MovetargetnameMinFieldsModel"
import { PokemonV2MovetargetnameMinFieldsModelSelector } from "./PokemonV2MovetargetnameMinFieldsModel.base"
import { PokemonV2MovetargetnameStddevFieldsModel, PokemonV2MovetargetnameStddevFieldsModelType } from "./PokemonV2MovetargetnameStddevFieldsModel"
import { PokemonV2MovetargetnameStddevFieldsModelSelector } from "./PokemonV2MovetargetnameStddevFieldsModel.base"
import { PokemonV2MovetargetnameStddevPopFieldsModel, PokemonV2MovetargetnameStddevPopFieldsModelType } from "./PokemonV2MovetargetnameStddevPopFieldsModel"
import { PokemonV2MovetargetnameStddevPopFieldsModelSelector } from "./PokemonV2MovetargetnameStddevPopFieldsModel.base"
import { PokemonV2MovetargetnameStddevSampFieldsModel, PokemonV2MovetargetnameStddevSampFieldsModelType } from "./PokemonV2MovetargetnameStddevSampFieldsModel"
import { PokemonV2MovetargetnameStddevSampFieldsModelSelector } from "./PokemonV2MovetargetnameStddevSampFieldsModel.base"
import { PokemonV2MovetargetnameSumFieldsModel, PokemonV2MovetargetnameSumFieldsModelType } from "./PokemonV2MovetargetnameSumFieldsModel"
import { PokemonV2MovetargetnameSumFieldsModelSelector } from "./PokemonV2MovetargetnameSumFieldsModel.base"
import { PokemonV2MovetargetnameVarPopFieldsModel, PokemonV2MovetargetnameVarPopFieldsModelType } from "./PokemonV2MovetargetnameVarPopFieldsModel"
import { PokemonV2MovetargetnameVarPopFieldsModelSelector } from "./PokemonV2MovetargetnameVarPopFieldsModel.base"
import { PokemonV2MovetargetnameVarSampFieldsModel, PokemonV2MovetargetnameVarSampFieldsModelType } from "./PokemonV2MovetargetnameVarSampFieldsModel"
import { PokemonV2MovetargetnameVarSampFieldsModelSelector } from "./PokemonV2MovetargetnameVarSampFieldsModel.base"
import { PokemonV2MovetargetnameVarianceFieldsModel, PokemonV2MovetargetnameVarianceFieldsModelType } from "./PokemonV2MovetargetnameVarianceFieldsModel"
import { PokemonV2MovetargetnameVarianceFieldsModelSelector } from "./PokemonV2MovetargetnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovetargetnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movetargetname"
 */
export const PokemonV2MovetargetnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_aggregate_fields"), "pokemon_v2_movetargetname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovetargetnameAvgFieldsModelSelector | ((selector: PokemonV2MovetargetnameAvgFieldsModelSelector) => PokemonV2MovetargetnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovetargetnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovetargetnameMaxFieldsModelSelector | ((selector: PokemonV2MovetargetnameMaxFieldsModelSelector) => PokemonV2MovetargetnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovetargetnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovetargetnameMinFieldsModelSelector | ((selector: PokemonV2MovetargetnameMinFieldsModelSelector) => PokemonV2MovetargetnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovetargetnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovetargetnameStddevFieldsModelSelector | ((selector: PokemonV2MovetargetnameStddevFieldsModelSelector) => PokemonV2MovetargetnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovetargetnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovetargetnameStddevPopFieldsModelSelector | ((selector: PokemonV2MovetargetnameStddevPopFieldsModelSelector) => PokemonV2MovetargetnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovetargetnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovetargetnameStddevSampFieldsModelSelector | ((selector: PokemonV2MovetargetnameStddevSampFieldsModelSelector) => PokemonV2MovetargetnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovetargetnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovetargetnameSumFieldsModelSelector | ((selector: PokemonV2MovetargetnameSumFieldsModelSelector) => PokemonV2MovetargetnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovetargetnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovetargetnameVarPopFieldsModelSelector | ((selector: PokemonV2MovetargetnameVarPopFieldsModelSelector) => PokemonV2MovetargetnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovetargetnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovetargetnameVarSampFieldsModelSelector | ((selector: PokemonV2MovetargetnameVarSampFieldsModelSelector) => PokemonV2MovetargetnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovetargetnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovetargetnameVarianceFieldsModelSelector | ((selector: PokemonV2MovetargetnameVarianceFieldsModelSelector) => PokemonV2MovetargetnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovetargetnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetnameAggregateFields() {
  return new PokemonV2MovetargetnameAggregateFieldsModelSelector()
}

export const pokemonV2MovetargetnameAggregateFieldsModelPrimitives = selectFromPokemonV2MovetargetnameAggregateFields().count
