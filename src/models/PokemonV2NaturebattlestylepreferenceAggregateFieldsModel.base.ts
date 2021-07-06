/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturebattlestylepreferenceAvgFieldsModel, PokemonV2NaturebattlestylepreferenceAvgFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceAvgFieldsModel"
import { PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceAvgFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceMaxFieldsModel, PokemonV2NaturebattlestylepreferenceMaxFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceMaxFieldsModel"
import { PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceMaxFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceMinFieldsModel, PokemonV2NaturebattlestylepreferenceMinFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceMinFieldsModel"
import { PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceMinFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceStddevFieldsModel, PokemonV2NaturebattlestylepreferenceStddevFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceStddevFieldsModel"
import { PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel, PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel"
import { PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel, PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel"
import { PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceSumFieldsModel, PokemonV2NaturebattlestylepreferenceSumFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceSumFieldsModel"
import { PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceSumFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceVarPopFieldsModel, PokemonV2NaturebattlestylepreferenceVarPopFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceVarPopFieldsModel"
import { PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarPopFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceVarSampFieldsModel, PokemonV2NaturebattlestylepreferenceVarSampFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceVarSampFieldsModel"
import { PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarSampFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceVarianceFieldsModel, PokemonV2NaturebattlestylepreferenceVarianceFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceVarianceFieldsModel"
import { PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceAggregateFieldsBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceAggregateFieldsModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_aggregate_fields"), "pokemon_v2_naturebattlestylepreference_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2NaturebattlestylepreferenceMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2NaturebattlestylepreferenceStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceAggregateFields() {
  return new PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceAggregateFieldsModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceAggregateFields().count
