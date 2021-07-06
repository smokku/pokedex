/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguagenameAvgFieldsModel, PokemonV2LanguagenameAvgFieldsModelType } from "./PokemonV2LanguagenameAvgFieldsModel"
import { PokemonV2LanguagenameAvgFieldsModelSelector } from "./PokemonV2LanguagenameAvgFieldsModel.base"
import { PokemonV2LanguagenameMaxFieldsModel, PokemonV2LanguagenameMaxFieldsModelType } from "./PokemonV2LanguagenameMaxFieldsModel"
import { PokemonV2LanguagenameMaxFieldsModelSelector } from "./PokemonV2LanguagenameMaxFieldsModel.base"
import { PokemonV2LanguagenameMinFieldsModel, PokemonV2LanguagenameMinFieldsModelType } from "./PokemonV2LanguagenameMinFieldsModel"
import { PokemonV2LanguagenameMinFieldsModelSelector } from "./PokemonV2LanguagenameMinFieldsModel.base"
import { PokemonV2LanguagenameStddevFieldsModel, PokemonV2LanguagenameStddevFieldsModelType } from "./PokemonV2LanguagenameStddevFieldsModel"
import { PokemonV2LanguagenameStddevFieldsModelSelector } from "./PokemonV2LanguagenameStddevFieldsModel.base"
import { PokemonV2LanguagenameStddevPopFieldsModel, PokemonV2LanguagenameStddevPopFieldsModelType } from "./PokemonV2LanguagenameStddevPopFieldsModel"
import { PokemonV2LanguagenameStddevPopFieldsModelSelector } from "./PokemonV2LanguagenameStddevPopFieldsModel.base"
import { PokemonV2LanguagenameStddevSampFieldsModel, PokemonV2LanguagenameStddevSampFieldsModelType } from "./PokemonV2LanguagenameStddevSampFieldsModel"
import { PokemonV2LanguagenameStddevSampFieldsModelSelector } from "./PokemonV2LanguagenameStddevSampFieldsModel.base"
import { PokemonV2LanguagenameSumFieldsModel, PokemonV2LanguagenameSumFieldsModelType } from "./PokemonV2LanguagenameSumFieldsModel"
import { PokemonV2LanguagenameSumFieldsModelSelector } from "./PokemonV2LanguagenameSumFieldsModel.base"
import { PokemonV2LanguagenameVarPopFieldsModel, PokemonV2LanguagenameVarPopFieldsModelType } from "./PokemonV2LanguagenameVarPopFieldsModel"
import { PokemonV2LanguagenameVarPopFieldsModelSelector } from "./PokemonV2LanguagenameVarPopFieldsModel.base"
import { PokemonV2LanguagenameVarSampFieldsModel, PokemonV2LanguagenameVarSampFieldsModelType } from "./PokemonV2LanguagenameVarSampFieldsModel"
import { PokemonV2LanguagenameVarSampFieldsModelSelector } from "./PokemonV2LanguagenameVarSampFieldsModel.base"
import { PokemonV2LanguagenameVarianceFieldsModel, PokemonV2LanguagenameVarianceFieldsModelType } from "./PokemonV2LanguagenameVarianceFieldsModel"
import { PokemonV2LanguagenameVarianceFieldsModelSelector } from "./PokemonV2LanguagenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_languagename"
 */
export const PokemonV2LanguagenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_aggregate_fields"), "pokemon_v2_languagename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguagenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LanguagenameAvgFieldsModelSelector | ((selector: PokemonV2LanguagenameAvgFieldsModelSelector) => PokemonV2LanguagenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LanguagenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LanguagenameMaxFieldsModelSelector | ((selector: PokemonV2LanguagenameMaxFieldsModelSelector) => PokemonV2LanguagenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LanguagenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LanguagenameMinFieldsModelSelector | ((selector: PokemonV2LanguagenameMinFieldsModelSelector) => PokemonV2LanguagenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LanguagenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LanguagenameStddevFieldsModelSelector | ((selector: PokemonV2LanguagenameStddevFieldsModelSelector) => PokemonV2LanguagenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LanguagenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LanguagenameStddevPopFieldsModelSelector | ((selector: PokemonV2LanguagenameStddevPopFieldsModelSelector) => PokemonV2LanguagenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LanguagenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LanguagenameStddevSampFieldsModelSelector | ((selector: PokemonV2LanguagenameStddevSampFieldsModelSelector) => PokemonV2LanguagenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LanguagenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LanguagenameSumFieldsModelSelector | ((selector: PokemonV2LanguagenameSumFieldsModelSelector) => PokemonV2LanguagenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LanguagenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LanguagenameVarPopFieldsModelSelector | ((selector: PokemonV2LanguagenameVarPopFieldsModelSelector) => PokemonV2LanguagenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LanguagenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LanguagenameVarSampFieldsModelSelector | ((selector: PokemonV2LanguagenameVarSampFieldsModelSelector) => PokemonV2LanguagenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LanguagenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LanguagenameVarianceFieldsModelSelector | ((selector: PokemonV2LanguagenameVarianceFieldsModelSelector) => PokemonV2LanguagenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LanguagenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LanguagenameAggregateFields() {
  return new PokemonV2LanguagenameAggregateFieldsModelSelector()
}

export const pokemonV2LanguagenameAggregateFieldsModelPrimitives = selectFromPokemonV2LanguagenameAggregateFields().count
