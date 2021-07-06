/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributedescriptionAvgFieldsModel, PokemonV2ItemattributedescriptionAvgFieldsModelType } from "./PokemonV2ItemattributedescriptionAvgFieldsModel"
import { PokemonV2ItemattributedescriptionAvgFieldsModelSelector } from "./PokemonV2ItemattributedescriptionAvgFieldsModel.base"
import { PokemonV2ItemattributedescriptionMaxFieldsModel, PokemonV2ItemattributedescriptionMaxFieldsModelType } from "./PokemonV2ItemattributedescriptionMaxFieldsModel"
import { PokemonV2ItemattributedescriptionMaxFieldsModelSelector } from "./PokemonV2ItemattributedescriptionMaxFieldsModel.base"
import { PokemonV2ItemattributedescriptionMinFieldsModel, PokemonV2ItemattributedescriptionMinFieldsModelType } from "./PokemonV2ItemattributedescriptionMinFieldsModel"
import { PokemonV2ItemattributedescriptionMinFieldsModelSelector } from "./PokemonV2ItemattributedescriptionMinFieldsModel.base"
import { PokemonV2ItemattributedescriptionStddevFieldsModel, PokemonV2ItemattributedescriptionStddevFieldsModelType } from "./PokemonV2ItemattributedescriptionStddevFieldsModel"
import { PokemonV2ItemattributedescriptionStddevFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevFieldsModel.base"
import { PokemonV2ItemattributedescriptionStddevPopFieldsModel, PokemonV2ItemattributedescriptionStddevPopFieldsModelType } from "./PokemonV2ItemattributedescriptionStddevPopFieldsModel"
import { PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevPopFieldsModel.base"
import { PokemonV2ItemattributedescriptionStddevSampFieldsModel, PokemonV2ItemattributedescriptionStddevSampFieldsModelType } from "./PokemonV2ItemattributedescriptionStddevSampFieldsModel"
import { PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevSampFieldsModel.base"
import { PokemonV2ItemattributedescriptionSumFieldsModel, PokemonV2ItemattributedescriptionSumFieldsModelType } from "./PokemonV2ItemattributedescriptionSumFieldsModel"
import { PokemonV2ItemattributedescriptionSumFieldsModelSelector } from "./PokemonV2ItemattributedescriptionSumFieldsModel.base"
import { PokemonV2ItemattributedescriptionVarPopFieldsModel, PokemonV2ItemattributedescriptionVarPopFieldsModelType } from "./PokemonV2ItemattributedescriptionVarPopFieldsModel"
import { PokemonV2ItemattributedescriptionVarPopFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarPopFieldsModel.base"
import { PokemonV2ItemattributedescriptionVarSampFieldsModel, PokemonV2ItemattributedescriptionVarSampFieldsModelType } from "./PokemonV2ItemattributedescriptionVarSampFieldsModel"
import { PokemonV2ItemattributedescriptionVarSampFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarSampFieldsModel.base"
import { PokemonV2ItemattributedescriptionVarianceFieldsModel, PokemonV2ItemattributedescriptionVarianceFieldsModelType } from "./PokemonV2ItemattributedescriptionVarianceFieldsModel"
import { PokemonV2ItemattributedescriptionVarianceFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_aggregate_fields"), "pokemon_v2_itemattributedescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributedescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributedescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemattributedescriptionAvgFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionAvgFieldsModelSelector) => PokemonV2ItemattributedescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemattributedescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemattributedescriptionMaxFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionMaxFieldsModelSelector) => PokemonV2ItemattributedescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemattributedescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemattributedescriptionMinFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionMinFieldsModelSelector) => PokemonV2ItemattributedescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemattributedescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemattributedescriptionStddevFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionStddevFieldsModelSelector) => PokemonV2ItemattributedescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemattributedescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector) => PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector) => PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemattributedescriptionSumFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionSumFieldsModelSelector) => PokemonV2ItemattributedescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemattributedescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemattributedescriptionVarPopFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionVarPopFieldsModelSelector) => PokemonV2ItemattributedescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemattributedescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemattributedescriptionVarSampFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionVarSampFieldsModelSelector) => PokemonV2ItemattributedescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemattributedescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemattributedescriptionVarianceFieldsModelSelector | ((selector: PokemonV2ItemattributedescriptionVarianceFieldsModelSelector) => PokemonV2ItemattributedescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemattributedescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributedescriptionAggregateFields() {
  return new PokemonV2ItemattributedescriptionAggregateFieldsModelSelector()
}

export const pokemonV2ItemattributedescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2ItemattributedescriptionAggregateFields().count
