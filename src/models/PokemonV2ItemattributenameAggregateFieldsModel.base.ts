/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributenameAvgFieldsModel, PokemonV2ItemattributenameAvgFieldsModelType } from "./PokemonV2ItemattributenameAvgFieldsModel"
import { PokemonV2ItemattributenameAvgFieldsModelSelector } from "./PokemonV2ItemattributenameAvgFieldsModel.base"
import { PokemonV2ItemattributenameMaxFieldsModel, PokemonV2ItemattributenameMaxFieldsModelType } from "./PokemonV2ItemattributenameMaxFieldsModel"
import { PokemonV2ItemattributenameMaxFieldsModelSelector } from "./PokemonV2ItemattributenameMaxFieldsModel.base"
import { PokemonV2ItemattributenameMinFieldsModel, PokemonV2ItemattributenameMinFieldsModelType } from "./PokemonV2ItemattributenameMinFieldsModel"
import { PokemonV2ItemattributenameMinFieldsModelSelector } from "./PokemonV2ItemattributenameMinFieldsModel.base"
import { PokemonV2ItemattributenameStddevFieldsModel, PokemonV2ItemattributenameStddevFieldsModelType } from "./PokemonV2ItemattributenameStddevFieldsModel"
import { PokemonV2ItemattributenameStddevFieldsModelSelector } from "./PokemonV2ItemattributenameStddevFieldsModel.base"
import { PokemonV2ItemattributenameStddevPopFieldsModel, PokemonV2ItemattributenameStddevPopFieldsModelType } from "./PokemonV2ItemattributenameStddevPopFieldsModel"
import { PokemonV2ItemattributenameStddevPopFieldsModelSelector } from "./PokemonV2ItemattributenameStddevPopFieldsModel.base"
import { PokemonV2ItemattributenameStddevSampFieldsModel, PokemonV2ItemattributenameStddevSampFieldsModelType } from "./PokemonV2ItemattributenameStddevSampFieldsModel"
import { PokemonV2ItemattributenameStddevSampFieldsModelSelector } from "./PokemonV2ItemattributenameStddevSampFieldsModel.base"
import { PokemonV2ItemattributenameSumFieldsModel, PokemonV2ItemattributenameSumFieldsModelType } from "./PokemonV2ItemattributenameSumFieldsModel"
import { PokemonV2ItemattributenameSumFieldsModelSelector } from "./PokemonV2ItemattributenameSumFieldsModel.base"
import { PokemonV2ItemattributenameVarPopFieldsModel, PokemonV2ItemattributenameVarPopFieldsModelType } from "./PokemonV2ItemattributenameVarPopFieldsModel"
import { PokemonV2ItemattributenameVarPopFieldsModelSelector } from "./PokemonV2ItemattributenameVarPopFieldsModel.base"
import { PokemonV2ItemattributenameVarSampFieldsModel, PokemonV2ItemattributenameVarSampFieldsModelType } from "./PokemonV2ItemattributenameVarSampFieldsModel"
import { PokemonV2ItemattributenameVarSampFieldsModelSelector } from "./PokemonV2ItemattributenameVarSampFieldsModel.base"
import { PokemonV2ItemattributenameVarianceFieldsModel, PokemonV2ItemattributenameVarianceFieldsModelType } from "./PokemonV2ItemattributenameVarianceFieldsModel"
import { PokemonV2ItemattributenameVarianceFieldsModelSelector } from "./PokemonV2ItemattributenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_aggregate_fields"), "pokemon_v2_itemattributename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemattributenameAvgFieldsModelSelector | ((selector: PokemonV2ItemattributenameAvgFieldsModelSelector) => PokemonV2ItemattributenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemattributenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemattributenameMaxFieldsModelSelector | ((selector: PokemonV2ItemattributenameMaxFieldsModelSelector) => PokemonV2ItemattributenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemattributenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemattributenameMinFieldsModelSelector | ((selector: PokemonV2ItemattributenameMinFieldsModelSelector) => PokemonV2ItemattributenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemattributenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemattributenameStddevFieldsModelSelector | ((selector: PokemonV2ItemattributenameStddevFieldsModelSelector) => PokemonV2ItemattributenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemattributenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemattributenameStddevPopFieldsModelSelector | ((selector: PokemonV2ItemattributenameStddevPopFieldsModelSelector) => PokemonV2ItemattributenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemattributenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemattributenameStddevSampFieldsModelSelector | ((selector: PokemonV2ItemattributenameStddevSampFieldsModelSelector) => PokemonV2ItemattributenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemattributenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemattributenameSumFieldsModelSelector | ((selector: PokemonV2ItemattributenameSumFieldsModelSelector) => PokemonV2ItemattributenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemattributenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemattributenameVarPopFieldsModelSelector | ((selector: PokemonV2ItemattributenameVarPopFieldsModelSelector) => PokemonV2ItemattributenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemattributenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemattributenameVarSampFieldsModelSelector | ((selector: PokemonV2ItemattributenameVarSampFieldsModelSelector) => PokemonV2ItemattributenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemattributenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemattributenameVarianceFieldsModelSelector | ((selector: PokemonV2ItemattributenameVarianceFieldsModelSelector) => PokemonV2ItemattributenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemattributenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributenameAggregateFields() {
  return new PokemonV2ItemattributenameAggregateFieldsModelSelector()
}

export const pokemonV2ItemattributenameAggregateFieldsModelPrimitives = selectFromPokemonV2ItemattributenameAggregateFields().count
