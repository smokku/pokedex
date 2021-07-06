/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ExperienceAvgFieldsModel, PokemonV2ExperienceAvgFieldsModelType } from "./PokemonV2ExperienceAvgFieldsModel"
import { PokemonV2ExperienceAvgFieldsModelSelector } from "./PokemonV2ExperienceAvgFieldsModel.base"
import { PokemonV2ExperienceMaxFieldsModel, PokemonV2ExperienceMaxFieldsModelType } from "./PokemonV2ExperienceMaxFieldsModel"
import { PokemonV2ExperienceMaxFieldsModelSelector } from "./PokemonV2ExperienceMaxFieldsModel.base"
import { PokemonV2ExperienceMinFieldsModel, PokemonV2ExperienceMinFieldsModelType } from "./PokemonV2ExperienceMinFieldsModel"
import { PokemonV2ExperienceMinFieldsModelSelector } from "./PokemonV2ExperienceMinFieldsModel.base"
import { PokemonV2ExperienceStddevFieldsModel, PokemonV2ExperienceStddevFieldsModelType } from "./PokemonV2ExperienceStddevFieldsModel"
import { PokemonV2ExperienceStddevFieldsModelSelector } from "./PokemonV2ExperienceStddevFieldsModel.base"
import { PokemonV2ExperienceStddevPopFieldsModel, PokemonV2ExperienceStddevPopFieldsModelType } from "./PokemonV2ExperienceStddevPopFieldsModel"
import { PokemonV2ExperienceStddevPopFieldsModelSelector } from "./PokemonV2ExperienceStddevPopFieldsModel.base"
import { PokemonV2ExperienceStddevSampFieldsModel, PokemonV2ExperienceStddevSampFieldsModelType } from "./PokemonV2ExperienceStddevSampFieldsModel"
import { PokemonV2ExperienceStddevSampFieldsModelSelector } from "./PokemonV2ExperienceStddevSampFieldsModel.base"
import { PokemonV2ExperienceSumFieldsModel, PokemonV2ExperienceSumFieldsModelType } from "./PokemonV2ExperienceSumFieldsModel"
import { PokemonV2ExperienceSumFieldsModelSelector } from "./PokemonV2ExperienceSumFieldsModel.base"
import { PokemonV2ExperienceVarPopFieldsModel, PokemonV2ExperienceVarPopFieldsModelType } from "./PokemonV2ExperienceVarPopFieldsModel"
import { PokemonV2ExperienceVarPopFieldsModelSelector } from "./PokemonV2ExperienceVarPopFieldsModel.base"
import { PokemonV2ExperienceVarSampFieldsModel, PokemonV2ExperienceVarSampFieldsModelType } from "./PokemonV2ExperienceVarSampFieldsModel"
import { PokemonV2ExperienceVarSampFieldsModelSelector } from "./PokemonV2ExperienceVarSampFieldsModel.base"
import { PokemonV2ExperienceVarianceFieldsModel, PokemonV2ExperienceVarianceFieldsModelType } from "./PokemonV2ExperienceVarianceFieldsModel"
import { PokemonV2ExperienceVarianceFieldsModelSelector } from "./PokemonV2ExperienceVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ExperienceAggregateFieldsBase
 * auto generated base class for the model PokemonV2ExperienceAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ExperienceAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_experience_aggregate_fields"), "pokemon_v2_experience_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ExperienceVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ExperienceAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ExperienceAvgFieldsModelSelector | ((selector: PokemonV2ExperienceAvgFieldsModelSelector) => PokemonV2ExperienceAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ExperienceAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ExperienceMaxFieldsModelSelector | ((selector: PokemonV2ExperienceMaxFieldsModelSelector) => PokemonV2ExperienceMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ExperienceMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ExperienceMinFieldsModelSelector | ((selector: PokemonV2ExperienceMinFieldsModelSelector) => PokemonV2ExperienceMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ExperienceMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ExperienceStddevFieldsModelSelector | ((selector: PokemonV2ExperienceStddevFieldsModelSelector) => PokemonV2ExperienceStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ExperienceStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ExperienceStddevPopFieldsModelSelector | ((selector: PokemonV2ExperienceStddevPopFieldsModelSelector) => PokemonV2ExperienceStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ExperienceStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ExperienceStddevSampFieldsModelSelector | ((selector: PokemonV2ExperienceStddevSampFieldsModelSelector) => PokemonV2ExperienceStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ExperienceStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ExperienceSumFieldsModelSelector | ((selector: PokemonV2ExperienceSumFieldsModelSelector) => PokemonV2ExperienceSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ExperienceSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ExperienceVarPopFieldsModelSelector | ((selector: PokemonV2ExperienceVarPopFieldsModelSelector) => PokemonV2ExperienceVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ExperienceVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ExperienceVarSampFieldsModelSelector | ((selector: PokemonV2ExperienceVarSampFieldsModelSelector) => PokemonV2ExperienceVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ExperienceVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ExperienceVarianceFieldsModelSelector | ((selector: PokemonV2ExperienceVarianceFieldsModelSelector) => PokemonV2ExperienceVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ExperienceVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ExperienceAggregateFields() {
  return new PokemonV2ExperienceAggregateFieldsModelSelector()
}

export const pokemonV2ExperienceAggregateFieldsModelPrimitives = selectFromPokemonV2ExperienceAggregateFields().count
