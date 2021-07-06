/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesdescriptionAvgFieldsModel, PokemonV2PokemonspeciesdescriptionAvgFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionAvgFieldsModel"
import { PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionAvgFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionMaxFieldsModel, PokemonV2PokemonspeciesdescriptionMaxFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionMaxFieldsModel"
import { PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionMaxFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionMinFieldsModel, PokemonV2PokemonspeciesdescriptionMinFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionMinFieldsModel"
import { PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionMinFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionStddevFieldsModel, PokemonV2PokemonspeciesdescriptionStddevFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionStddevFieldsModel"
import { PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel, PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel"
import { PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel, PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel"
import { PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionSumFieldsModel, PokemonV2PokemonspeciesdescriptionSumFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionSumFieldsModel"
import { PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionSumFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionVarPopFieldsModel, PokemonV2PokemonspeciesdescriptionVarPopFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionVarPopFieldsModel"
import { PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarPopFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionVarSampFieldsModel, PokemonV2PokemonspeciesdescriptionVarSampFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionVarSampFieldsModel"
import { PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarSampFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionVarianceFieldsModel, PokemonV2PokemonspeciesdescriptionVarianceFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionVarianceFieldsModel"
import { PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesdescription"
 */
export const PokemonV2PokemonspeciesdescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_aggregate_fields"), "pokemon_v2_pokemonspeciesdescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonspeciesdescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonspeciesdescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionAggregateFields() {
  return new PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionAggregateFields().count
