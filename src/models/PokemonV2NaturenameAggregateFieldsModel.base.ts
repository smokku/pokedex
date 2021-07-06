/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturenameAvgFieldsModel, PokemonV2NaturenameAvgFieldsModelType } from "./PokemonV2NaturenameAvgFieldsModel"
import { PokemonV2NaturenameAvgFieldsModelSelector } from "./PokemonV2NaturenameAvgFieldsModel.base"
import { PokemonV2NaturenameMaxFieldsModel, PokemonV2NaturenameMaxFieldsModelType } from "./PokemonV2NaturenameMaxFieldsModel"
import { PokemonV2NaturenameMaxFieldsModelSelector } from "./PokemonV2NaturenameMaxFieldsModel.base"
import { PokemonV2NaturenameMinFieldsModel, PokemonV2NaturenameMinFieldsModelType } from "./PokemonV2NaturenameMinFieldsModel"
import { PokemonV2NaturenameMinFieldsModelSelector } from "./PokemonV2NaturenameMinFieldsModel.base"
import { PokemonV2NaturenameStddevFieldsModel, PokemonV2NaturenameStddevFieldsModelType } from "./PokemonV2NaturenameStddevFieldsModel"
import { PokemonV2NaturenameStddevFieldsModelSelector } from "./PokemonV2NaturenameStddevFieldsModel.base"
import { PokemonV2NaturenameStddevPopFieldsModel, PokemonV2NaturenameStddevPopFieldsModelType } from "./PokemonV2NaturenameStddevPopFieldsModel"
import { PokemonV2NaturenameStddevPopFieldsModelSelector } from "./PokemonV2NaturenameStddevPopFieldsModel.base"
import { PokemonV2NaturenameStddevSampFieldsModel, PokemonV2NaturenameStddevSampFieldsModelType } from "./PokemonV2NaturenameStddevSampFieldsModel"
import { PokemonV2NaturenameStddevSampFieldsModelSelector } from "./PokemonV2NaturenameStddevSampFieldsModel.base"
import { PokemonV2NaturenameSumFieldsModel, PokemonV2NaturenameSumFieldsModelType } from "./PokemonV2NaturenameSumFieldsModel"
import { PokemonV2NaturenameSumFieldsModelSelector } from "./PokemonV2NaturenameSumFieldsModel.base"
import { PokemonV2NaturenameVarPopFieldsModel, PokemonV2NaturenameVarPopFieldsModelType } from "./PokemonV2NaturenameVarPopFieldsModel"
import { PokemonV2NaturenameVarPopFieldsModelSelector } from "./PokemonV2NaturenameVarPopFieldsModel.base"
import { PokemonV2NaturenameVarSampFieldsModel, PokemonV2NaturenameVarSampFieldsModelType } from "./PokemonV2NaturenameVarSampFieldsModel"
import { PokemonV2NaturenameVarSampFieldsModelSelector } from "./PokemonV2NaturenameVarSampFieldsModel.base"
import { PokemonV2NaturenameVarianceFieldsModel, PokemonV2NaturenameVarianceFieldsModelType } from "./PokemonV2NaturenameVarianceFieldsModel"
import { PokemonV2NaturenameVarianceFieldsModelSelector } from "./PokemonV2NaturenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2NaturenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2NaturenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_aggregate_fields"), "pokemon_v2_naturename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2NaturenameAvgFieldsModelSelector | ((selector: PokemonV2NaturenameAvgFieldsModelSelector) => PokemonV2NaturenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2NaturenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2NaturenameMaxFieldsModelSelector | ((selector: PokemonV2NaturenameMaxFieldsModelSelector) => PokemonV2NaturenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2NaturenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2NaturenameMinFieldsModelSelector | ((selector: PokemonV2NaturenameMinFieldsModelSelector) => PokemonV2NaturenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2NaturenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2NaturenameStddevFieldsModelSelector | ((selector: PokemonV2NaturenameStddevFieldsModelSelector) => PokemonV2NaturenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2NaturenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2NaturenameStddevPopFieldsModelSelector | ((selector: PokemonV2NaturenameStddevPopFieldsModelSelector) => PokemonV2NaturenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2NaturenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2NaturenameStddevSampFieldsModelSelector | ((selector: PokemonV2NaturenameStddevSampFieldsModelSelector) => PokemonV2NaturenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2NaturenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2NaturenameSumFieldsModelSelector | ((selector: PokemonV2NaturenameSumFieldsModelSelector) => PokemonV2NaturenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2NaturenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2NaturenameVarPopFieldsModelSelector | ((selector: PokemonV2NaturenameVarPopFieldsModelSelector) => PokemonV2NaturenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2NaturenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2NaturenameVarSampFieldsModelSelector | ((selector: PokemonV2NaturenameVarSampFieldsModelSelector) => PokemonV2NaturenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2NaturenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2NaturenameVarianceFieldsModelSelector | ((selector: PokemonV2NaturenameVarianceFieldsModelSelector) => PokemonV2NaturenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2NaturenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2NaturenameAggregateFields() {
  return new PokemonV2NaturenameAggregateFieldsModelSelector()
}

export const pokemonV2NaturenameAggregateFieldsModelPrimitives = selectFromPokemonV2NaturenameAggregateFields().count
