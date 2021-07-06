/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetdescriptionAvgFieldsModel, PokemonV2MovetargetdescriptionAvgFieldsModelType } from "./PokemonV2MovetargetdescriptionAvgFieldsModel"
import { PokemonV2MovetargetdescriptionAvgFieldsModelSelector } from "./PokemonV2MovetargetdescriptionAvgFieldsModel.base"
import { PokemonV2MovetargetdescriptionMaxFieldsModel, PokemonV2MovetargetdescriptionMaxFieldsModelType } from "./PokemonV2MovetargetdescriptionMaxFieldsModel"
import { PokemonV2MovetargetdescriptionMaxFieldsModelSelector } from "./PokemonV2MovetargetdescriptionMaxFieldsModel.base"
import { PokemonV2MovetargetdescriptionMinFieldsModel, PokemonV2MovetargetdescriptionMinFieldsModelType } from "./PokemonV2MovetargetdescriptionMinFieldsModel"
import { PokemonV2MovetargetdescriptionMinFieldsModelSelector } from "./PokemonV2MovetargetdescriptionMinFieldsModel.base"
import { PokemonV2MovetargetdescriptionStddevFieldsModel, PokemonV2MovetargetdescriptionStddevFieldsModelType } from "./PokemonV2MovetargetdescriptionStddevFieldsModel"
import { PokemonV2MovetargetdescriptionStddevFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevFieldsModel.base"
import { PokemonV2MovetargetdescriptionStddevPopFieldsModel, PokemonV2MovetargetdescriptionStddevPopFieldsModelType } from "./PokemonV2MovetargetdescriptionStddevPopFieldsModel"
import { PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevPopFieldsModel.base"
import { PokemonV2MovetargetdescriptionStddevSampFieldsModel, PokemonV2MovetargetdescriptionStddevSampFieldsModelType } from "./PokemonV2MovetargetdescriptionStddevSampFieldsModel"
import { PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevSampFieldsModel.base"
import { PokemonV2MovetargetdescriptionSumFieldsModel, PokemonV2MovetargetdescriptionSumFieldsModelType } from "./PokemonV2MovetargetdescriptionSumFieldsModel"
import { PokemonV2MovetargetdescriptionSumFieldsModelSelector } from "./PokemonV2MovetargetdescriptionSumFieldsModel.base"
import { PokemonV2MovetargetdescriptionVarPopFieldsModel, PokemonV2MovetargetdescriptionVarPopFieldsModelType } from "./PokemonV2MovetargetdescriptionVarPopFieldsModel"
import { PokemonV2MovetargetdescriptionVarPopFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarPopFieldsModel.base"
import { PokemonV2MovetargetdescriptionVarSampFieldsModel, PokemonV2MovetargetdescriptionVarSampFieldsModelType } from "./PokemonV2MovetargetdescriptionVarSampFieldsModel"
import { PokemonV2MovetargetdescriptionVarSampFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarSampFieldsModel.base"
import { PokemonV2MovetargetdescriptionVarianceFieldsModel, PokemonV2MovetargetdescriptionVarianceFieldsModelType } from "./PokemonV2MovetargetdescriptionVarianceFieldsModel"
import { PokemonV2MovetargetdescriptionVarianceFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_aggregate_fields"), "pokemon_v2_movetargetdescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetdescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovetargetdescriptionAvgFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionAvgFieldsModelSelector) => PokemonV2MovetargetdescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovetargetdescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovetargetdescriptionMaxFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionMaxFieldsModelSelector) => PokemonV2MovetargetdescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovetargetdescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovetargetdescriptionMinFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionMinFieldsModelSelector) => PokemonV2MovetargetdescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovetargetdescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovetargetdescriptionStddevFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionStddevFieldsModelSelector) => PokemonV2MovetargetdescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovetargetdescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector) => PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovetargetdescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector) => PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovetargetdescriptionSumFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionSumFieldsModelSelector) => PokemonV2MovetargetdescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovetargetdescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovetargetdescriptionVarPopFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionVarPopFieldsModelSelector) => PokemonV2MovetargetdescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovetargetdescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovetargetdescriptionVarSampFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionVarSampFieldsModelSelector) => PokemonV2MovetargetdescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovetargetdescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovetargetdescriptionVarianceFieldsModelSelector | ((selector: PokemonV2MovetargetdescriptionVarianceFieldsModelSelector) => PokemonV2MovetargetdescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovetargetdescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetdescriptionAggregateFields() {
  return new PokemonV2MovetargetdescriptionAggregateFieldsModelSelector()
}

export const pokemonV2MovetargetdescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2MovetargetdescriptionAggregateFields().count
