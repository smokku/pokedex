/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationnameAvgFieldsModel, PokemonV2GenerationnameAvgFieldsModelType } from "./PokemonV2GenerationnameAvgFieldsModel"
import { PokemonV2GenerationnameAvgFieldsModelSelector } from "./PokemonV2GenerationnameAvgFieldsModel.base"
import { PokemonV2GenerationnameMaxFieldsModel, PokemonV2GenerationnameMaxFieldsModelType } from "./PokemonV2GenerationnameMaxFieldsModel"
import { PokemonV2GenerationnameMaxFieldsModelSelector } from "./PokemonV2GenerationnameMaxFieldsModel.base"
import { PokemonV2GenerationnameMinFieldsModel, PokemonV2GenerationnameMinFieldsModelType } from "./PokemonV2GenerationnameMinFieldsModel"
import { PokemonV2GenerationnameMinFieldsModelSelector } from "./PokemonV2GenerationnameMinFieldsModel.base"
import { PokemonV2GenerationnameStddevFieldsModel, PokemonV2GenerationnameStddevFieldsModelType } from "./PokemonV2GenerationnameStddevFieldsModel"
import { PokemonV2GenerationnameStddevFieldsModelSelector } from "./PokemonV2GenerationnameStddevFieldsModel.base"
import { PokemonV2GenerationnameStddevPopFieldsModel, PokemonV2GenerationnameStddevPopFieldsModelType } from "./PokemonV2GenerationnameStddevPopFieldsModel"
import { PokemonV2GenerationnameStddevPopFieldsModelSelector } from "./PokemonV2GenerationnameStddevPopFieldsModel.base"
import { PokemonV2GenerationnameStddevSampFieldsModel, PokemonV2GenerationnameStddevSampFieldsModelType } from "./PokemonV2GenerationnameStddevSampFieldsModel"
import { PokemonV2GenerationnameStddevSampFieldsModelSelector } from "./PokemonV2GenerationnameStddevSampFieldsModel.base"
import { PokemonV2GenerationnameSumFieldsModel, PokemonV2GenerationnameSumFieldsModelType } from "./PokemonV2GenerationnameSumFieldsModel"
import { PokemonV2GenerationnameSumFieldsModelSelector } from "./PokemonV2GenerationnameSumFieldsModel.base"
import { PokemonV2GenerationnameVarPopFieldsModel, PokemonV2GenerationnameVarPopFieldsModelType } from "./PokemonV2GenerationnameVarPopFieldsModel"
import { PokemonV2GenerationnameVarPopFieldsModelSelector } from "./PokemonV2GenerationnameVarPopFieldsModel.base"
import { PokemonV2GenerationnameVarSampFieldsModel, PokemonV2GenerationnameVarSampFieldsModelType } from "./PokemonV2GenerationnameVarSampFieldsModel"
import { PokemonV2GenerationnameVarSampFieldsModelSelector } from "./PokemonV2GenerationnameVarSampFieldsModel.base"
import { PokemonV2GenerationnameVarianceFieldsModel, PokemonV2GenerationnameVarianceFieldsModelType } from "./PokemonV2GenerationnameVarianceFieldsModel"
import { PokemonV2GenerationnameVarianceFieldsModelSelector } from "./PokemonV2GenerationnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2GenerationnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_generationname"
 */
export const PokemonV2GenerationnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2GenerationnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_aggregate_fields"), "pokemon_v2_generationname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2GenerationnameAvgFieldsModelSelector | ((selector: PokemonV2GenerationnameAvgFieldsModelSelector) => PokemonV2GenerationnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2GenerationnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2GenerationnameMaxFieldsModelSelector | ((selector: PokemonV2GenerationnameMaxFieldsModelSelector) => PokemonV2GenerationnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2GenerationnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2GenerationnameMinFieldsModelSelector | ((selector: PokemonV2GenerationnameMinFieldsModelSelector) => PokemonV2GenerationnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2GenerationnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2GenerationnameStddevFieldsModelSelector | ((selector: PokemonV2GenerationnameStddevFieldsModelSelector) => PokemonV2GenerationnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2GenerationnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2GenerationnameStddevPopFieldsModelSelector | ((selector: PokemonV2GenerationnameStddevPopFieldsModelSelector) => PokemonV2GenerationnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2GenerationnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2GenerationnameStddevSampFieldsModelSelector | ((selector: PokemonV2GenerationnameStddevSampFieldsModelSelector) => PokemonV2GenerationnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2GenerationnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2GenerationnameSumFieldsModelSelector | ((selector: PokemonV2GenerationnameSumFieldsModelSelector) => PokemonV2GenerationnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2GenerationnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2GenerationnameVarPopFieldsModelSelector | ((selector: PokemonV2GenerationnameVarPopFieldsModelSelector) => PokemonV2GenerationnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2GenerationnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2GenerationnameVarSampFieldsModelSelector | ((selector: PokemonV2GenerationnameVarSampFieldsModelSelector) => PokemonV2GenerationnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2GenerationnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2GenerationnameVarianceFieldsModelSelector | ((selector: PokemonV2GenerationnameVarianceFieldsModelSelector) => PokemonV2GenerationnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2GenerationnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2GenerationnameAggregateFields() {
  return new PokemonV2GenerationnameAggregateFieldsModelSelector()
}

export const pokemonV2GenerationnameAggregateFieldsModelPrimitives = selectFromPokemonV2GenerationnameAggregateFields().count
