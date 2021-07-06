/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethoddescriptionAvgFieldsModel, PokemonV2MovelearnmethoddescriptionAvgFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionAvgFieldsModel"
import { PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionAvgFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionMaxFieldsModel, PokemonV2MovelearnmethoddescriptionMaxFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionMaxFieldsModel"
import { PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionMaxFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionMinFieldsModel, PokemonV2MovelearnmethoddescriptionMinFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionMinFieldsModel"
import { PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionMinFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionStddevFieldsModel, PokemonV2MovelearnmethoddescriptionStddevFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionStddevFieldsModel"
import { PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel, PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel"
import { PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel, PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel"
import { PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionSumFieldsModel, PokemonV2MovelearnmethoddescriptionSumFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionSumFieldsModel"
import { PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionSumFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionVarPopFieldsModel, PokemonV2MovelearnmethoddescriptionVarPopFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionVarPopFieldsModel"
import { PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarPopFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionVarSampFieldsModel, PokemonV2MovelearnmethoddescriptionVarSampFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionVarSampFieldsModel"
import { PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarSampFieldsModel.base"
import { PokemonV2MovelearnmethoddescriptionVarianceFieldsModel, PokemonV2MovelearnmethoddescriptionVarianceFieldsModelType } from "./PokemonV2MovelearnmethoddescriptionVarianceFieldsModel"
import { PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethoddescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethoddescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movelearnmethoddescription"
 */
export const PokemonV2MovelearnmethoddescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethoddescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethoddescription_aggregate_fields"), "pokemon_v2_movelearnmethoddescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethoddescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector) => PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethoddescriptionAggregateFields() {
  return new PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector()
}

export const pokemonV2MovelearnmethoddescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2MovelearnmethoddescriptionAggregateFields().count
