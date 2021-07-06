/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageAvgFieldsModel, PokemonV2LanguageAvgFieldsModelType } from "./PokemonV2LanguageAvgFieldsModel"
import { PokemonV2LanguageAvgFieldsModelSelector } from "./PokemonV2LanguageAvgFieldsModel.base"
import { PokemonV2LanguageMaxFieldsModel, PokemonV2LanguageMaxFieldsModelType } from "./PokemonV2LanguageMaxFieldsModel"
import { PokemonV2LanguageMaxFieldsModelSelector } from "./PokemonV2LanguageMaxFieldsModel.base"
import { PokemonV2LanguageMinFieldsModel, PokemonV2LanguageMinFieldsModelType } from "./PokemonV2LanguageMinFieldsModel"
import { PokemonV2LanguageMinFieldsModelSelector } from "./PokemonV2LanguageMinFieldsModel.base"
import { PokemonV2LanguageStddevFieldsModel, PokemonV2LanguageStddevFieldsModelType } from "./PokemonV2LanguageStddevFieldsModel"
import { PokemonV2LanguageStddevFieldsModelSelector } from "./PokemonV2LanguageStddevFieldsModel.base"
import { PokemonV2LanguageStddevPopFieldsModel, PokemonV2LanguageStddevPopFieldsModelType } from "./PokemonV2LanguageStddevPopFieldsModel"
import { PokemonV2LanguageStddevPopFieldsModelSelector } from "./PokemonV2LanguageStddevPopFieldsModel.base"
import { PokemonV2LanguageStddevSampFieldsModel, PokemonV2LanguageStddevSampFieldsModelType } from "./PokemonV2LanguageStddevSampFieldsModel"
import { PokemonV2LanguageStddevSampFieldsModelSelector } from "./PokemonV2LanguageStddevSampFieldsModel.base"
import { PokemonV2LanguageSumFieldsModel, PokemonV2LanguageSumFieldsModelType } from "./PokemonV2LanguageSumFieldsModel"
import { PokemonV2LanguageSumFieldsModelSelector } from "./PokemonV2LanguageSumFieldsModel.base"
import { PokemonV2LanguageVarPopFieldsModel, PokemonV2LanguageVarPopFieldsModelType } from "./PokemonV2LanguageVarPopFieldsModel"
import { PokemonV2LanguageVarPopFieldsModelSelector } from "./PokemonV2LanguageVarPopFieldsModel.base"
import { PokemonV2LanguageVarSampFieldsModel, PokemonV2LanguageVarSampFieldsModelType } from "./PokemonV2LanguageVarSampFieldsModel"
import { PokemonV2LanguageVarSampFieldsModelSelector } from "./PokemonV2LanguageVarSampFieldsModel.base"
import { PokemonV2LanguageVarianceFieldsModel, PokemonV2LanguageVarianceFieldsModelType } from "./PokemonV2LanguageVarianceFieldsModel"
import { PokemonV2LanguageVarianceFieldsModelSelector } from "./PokemonV2LanguageVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageAggregateFieldsBase
 * auto generated base class for the model PokemonV2LanguageAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_language"
 */
export const PokemonV2LanguageAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LanguageAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_aggregate_fields"), "pokemon_v2_language_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LanguageAvgFieldsModelSelector | ((selector: PokemonV2LanguageAvgFieldsModelSelector) => PokemonV2LanguageAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LanguageAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LanguageMaxFieldsModelSelector | ((selector: PokemonV2LanguageMaxFieldsModelSelector) => PokemonV2LanguageMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LanguageMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LanguageMinFieldsModelSelector | ((selector: PokemonV2LanguageMinFieldsModelSelector) => PokemonV2LanguageMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LanguageMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LanguageStddevFieldsModelSelector | ((selector: PokemonV2LanguageStddevFieldsModelSelector) => PokemonV2LanguageStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LanguageStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LanguageStddevPopFieldsModelSelector | ((selector: PokemonV2LanguageStddevPopFieldsModelSelector) => PokemonV2LanguageStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LanguageStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LanguageStddevSampFieldsModelSelector | ((selector: PokemonV2LanguageStddevSampFieldsModelSelector) => PokemonV2LanguageStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LanguageStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LanguageSumFieldsModelSelector | ((selector: PokemonV2LanguageSumFieldsModelSelector) => PokemonV2LanguageSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LanguageSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LanguageVarPopFieldsModelSelector | ((selector: PokemonV2LanguageVarPopFieldsModelSelector) => PokemonV2LanguageVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LanguageVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LanguageVarSampFieldsModelSelector | ((selector: PokemonV2LanguageVarSampFieldsModelSelector) => PokemonV2LanguageVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LanguageVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LanguageVarianceFieldsModelSelector | ((selector: PokemonV2LanguageVarianceFieldsModelSelector) => PokemonV2LanguageVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LanguageVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LanguageAggregateFields() {
  return new PokemonV2LanguageAggregateFieldsModelSelector()
}

export const pokemonV2LanguageAggregateFieldsModelPrimitives = selectFromPokemonV2LanguageAggregateFields().count
