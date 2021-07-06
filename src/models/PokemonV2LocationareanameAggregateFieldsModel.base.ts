/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareanameAvgFieldsModel, PokemonV2LocationareanameAvgFieldsModelType } from "./PokemonV2LocationareanameAvgFieldsModel"
import { PokemonV2LocationareanameAvgFieldsModelSelector } from "./PokemonV2LocationareanameAvgFieldsModel.base"
import { PokemonV2LocationareanameMaxFieldsModel, PokemonV2LocationareanameMaxFieldsModelType } from "./PokemonV2LocationareanameMaxFieldsModel"
import { PokemonV2LocationareanameMaxFieldsModelSelector } from "./PokemonV2LocationareanameMaxFieldsModel.base"
import { PokemonV2LocationareanameMinFieldsModel, PokemonV2LocationareanameMinFieldsModelType } from "./PokemonV2LocationareanameMinFieldsModel"
import { PokemonV2LocationareanameMinFieldsModelSelector } from "./PokemonV2LocationareanameMinFieldsModel.base"
import { PokemonV2LocationareanameStddevFieldsModel, PokemonV2LocationareanameStddevFieldsModelType } from "./PokemonV2LocationareanameStddevFieldsModel"
import { PokemonV2LocationareanameStddevFieldsModelSelector } from "./PokemonV2LocationareanameStddevFieldsModel.base"
import { PokemonV2LocationareanameStddevPopFieldsModel, PokemonV2LocationareanameStddevPopFieldsModelType } from "./PokemonV2LocationareanameStddevPopFieldsModel"
import { PokemonV2LocationareanameStddevPopFieldsModelSelector } from "./PokemonV2LocationareanameStddevPopFieldsModel.base"
import { PokemonV2LocationareanameStddevSampFieldsModel, PokemonV2LocationareanameStddevSampFieldsModelType } from "./PokemonV2LocationareanameStddevSampFieldsModel"
import { PokemonV2LocationareanameStddevSampFieldsModelSelector } from "./PokemonV2LocationareanameStddevSampFieldsModel.base"
import { PokemonV2LocationareanameSumFieldsModel, PokemonV2LocationareanameSumFieldsModelType } from "./PokemonV2LocationareanameSumFieldsModel"
import { PokemonV2LocationareanameSumFieldsModelSelector } from "./PokemonV2LocationareanameSumFieldsModel.base"
import { PokemonV2LocationareanameVarPopFieldsModel, PokemonV2LocationareanameVarPopFieldsModelType } from "./PokemonV2LocationareanameVarPopFieldsModel"
import { PokemonV2LocationareanameVarPopFieldsModelSelector } from "./PokemonV2LocationareanameVarPopFieldsModel.base"
import { PokemonV2LocationareanameVarSampFieldsModel, PokemonV2LocationareanameVarSampFieldsModelType } from "./PokemonV2LocationareanameVarSampFieldsModel"
import { PokemonV2LocationareanameVarSampFieldsModelSelector } from "./PokemonV2LocationareanameVarSampFieldsModel.base"
import { PokemonV2LocationareanameVarianceFieldsModel, PokemonV2LocationareanameVarianceFieldsModelType } from "./PokemonV2LocationareanameVarianceFieldsModel"
import { PokemonV2LocationareanameVarianceFieldsModelSelector } from "./PokemonV2LocationareanameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_aggregate_fields"), "pokemon_v2_locationareaname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationareanameAvgFieldsModelSelector | ((selector: PokemonV2LocationareanameAvgFieldsModelSelector) => PokemonV2LocationareanameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationareanameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationareanameMaxFieldsModelSelector | ((selector: PokemonV2LocationareanameMaxFieldsModelSelector) => PokemonV2LocationareanameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationareanameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationareanameMinFieldsModelSelector | ((selector: PokemonV2LocationareanameMinFieldsModelSelector) => PokemonV2LocationareanameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationareanameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationareanameStddevFieldsModelSelector | ((selector: PokemonV2LocationareanameStddevFieldsModelSelector) => PokemonV2LocationareanameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationareanameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationareanameStddevPopFieldsModelSelector | ((selector: PokemonV2LocationareanameStddevPopFieldsModelSelector) => PokemonV2LocationareanameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationareanameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationareanameStddevSampFieldsModelSelector | ((selector: PokemonV2LocationareanameStddevSampFieldsModelSelector) => PokemonV2LocationareanameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationareanameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationareanameSumFieldsModelSelector | ((selector: PokemonV2LocationareanameSumFieldsModelSelector) => PokemonV2LocationareanameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationareanameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationareanameVarPopFieldsModelSelector | ((selector: PokemonV2LocationareanameVarPopFieldsModelSelector) => PokemonV2LocationareanameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationareanameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationareanameVarSampFieldsModelSelector | ((selector: PokemonV2LocationareanameVarSampFieldsModelSelector) => PokemonV2LocationareanameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationareanameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationareanameVarianceFieldsModelSelector | ((selector: PokemonV2LocationareanameVarianceFieldsModelSelector) => PokemonV2LocationareanameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationareanameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationareanameAggregateFields() {
  return new PokemonV2LocationareanameAggregateFieldsModelSelector()
}

export const pokemonV2LocationareanameAggregateFieldsModelPrimitives = selectFromPokemonV2LocationareanameAggregateFields().count
