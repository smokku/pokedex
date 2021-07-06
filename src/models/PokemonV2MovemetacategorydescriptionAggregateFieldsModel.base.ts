/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetacategorydescriptionAvgFieldsModel, PokemonV2MovemetacategorydescriptionAvgFieldsModelType } from "./PokemonV2MovemetacategorydescriptionAvgFieldsModel"
import { PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionAvgFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionMaxFieldsModel, PokemonV2MovemetacategorydescriptionMaxFieldsModelType } from "./PokemonV2MovemetacategorydescriptionMaxFieldsModel"
import { PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionMaxFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionMinFieldsModel, PokemonV2MovemetacategorydescriptionMinFieldsModelType } from "./PokemonV2MovemetacategorydescriptionMinFieldsModel"
import { PokemonV2MovemetacategorydescriptionMinFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionMinFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionStddevFieldsModel, PokemonV2MovemetacategorydescriptionStddevFieldsModelType } from "./PokemonV2MovemetacategorydescriptionStddevFieldsModel"
import { PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionStddevPopFieldsModel, PokemonV2MovemetacategorydescriptionStddevPopFieldsModelType } from "./PokemonV2MovemetacategorydescriptionStddevPopFieldsModel"
import { PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevPopFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionStddevSampFieldsModel, PokemonV2MovemetacategorydescriptionStddevSampFieldsModelType } from "./PokemonV2MovemetacategorydescriptionStddevSampFieldsModel"
import { PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevSampFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionSumFieldsModel, PokemonV2MovemetacategorydescriptionSumFieldsModelType } from "./PokemonV2MovemetacategorydescriptionSumFieldsModel"
import { PokemonV2MovemetacategorydescriptionSumFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionSumFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionVarPopFieldsModel, PokemonV2MovemetacategorydescriptionVarPopFieldsModelType } from "./PokemonV2MovemetacategorydescriptionVarPopFieldsModel"
import { PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarPopFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionVarSampFieldsModel, PokemonV2MovemetacategorydescriptionVarSampFieldsModelType } from "./PokemonV2MovemetacategorydescriptionVarSampFieldsModel"
import { PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarSampFieldsModel.base"
import { PokemonV2MovemetacategorydescriptionVarianceFieldsModel, PokemonV2MovemetacategorydescriptionVarianceFieldsModelType } from "./PokemonV2MovemetacategorydescriptionVarianceFieldsModel"
import { PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategorydescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategorydescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategorydescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategorydescription_aggregate_fields"), "pokemon_v2_movemetacategorydescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorydescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector) => PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector) => PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetacategorydescriptionMinFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionMinFieldsModelSelector) => PokemonV2MovemetacategorydescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetacategorydescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector) => PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector) => PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector) => PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetacategorydescriptionSumFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionSumFieldsModelSelector) => PokemonV2MovemetacategorydescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetacategorydescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector) => PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector) => PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector | ((selector: PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector) => PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetacategorydescriptionAggregateFields() {
  return new PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector()
}

export const pokemonV2MovemetacategorydescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetacategorydescriptionAggregateFields().count
