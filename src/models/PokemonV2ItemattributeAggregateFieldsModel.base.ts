/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributeAvgFieldsModel, PokemonV2ItemattributeAvgFieldsModelType } from "./PokemonV2ItemattributeAvgFieldsModel"
import { PokemonV2ItemattributeAvgFieldsModelSelector } from "./PokemonV2ItemattributeAvgFieldsModel.base"
import { PokemonV2ItemattributeMaxFieldsModel, PokemonV2ItemattributeMaxFieldsModelType } from "./PokemonV2ItemattributeMaxFieldsModel"
import { PokemonV2ItemattributeMaxFieldsModelSelector } from "./PokemonV2ItemattributeMaxFieldsModel.base"
import { PokemonV2ItemattributeMinFieldsModel, PokemonV2ItemattributeMinFieldsModelType } from "./PokemonV2ItemattributeMinFieldsModel"
import { PokemonV2ItemattributeMinFieldsModelSelector } from "./PokemonV2ItemattributeMinFieldsModel.base"
import { PokemonV2ItemattributeStddevFieldsModel, PokemonV2ItemattributeStddevFieldsModelType } from "./PokemonV2ItemattributeStddevFieldsModel"
import { PokemonV2ItemattributeStddevFieldsModelSelector } from "./PokemonV2ItemattributeStddevFieldsModel.base"
import { PokemonV2ItemattributeStddevPopFieldsModel, PokemonV2ItemattributeStddevPopFieldsModelType } from "./PokemonV2ItemattributeStddevPopFieldsModel"
import { PokemonV2ItemattributeStddevPopFieldsModelSelector } from "./PokemonV2ItemattributeStddevPopFieldsModel.base"
import { PokemonV2ItemattributeStddevSampFieldsModel, PokemonV2ItemattributeStddevSampFieldsModelType } from "./PokemonV2ItemattributeStddevSampFieldsModel"
import { PokemonV2ItemattributeStddevSampFieldsModelSelector } from "./PokemonV2ItemattributeStddevSampFieldsModel.base"
import { PokemonV2ItemattributeSumFieldsModel, PokemonV2ItemattributeSumFieldsModelType } from "./PokemonV2ItemattributeSumFieldsModel"
import { PokemonV2ItemattributeSumFieldsModelSelector } from "./PokemonV2ItemattributeSumFieldsModel.base"
import { PokemonV2ItemattributeVarPopFieldsModel, PokemonV2ItemattributeVarPopFieldsModelType } from "./PokemonV2ItemattributeVarPopFieldsModel"
import { PokemonV2ItemattributeVarPopFieldsModelSelector } from "./PokemonV2ItemattributeVarPopFieldsModel.base"
import { PokemonV2ItemattributeVarSampFieldsModel, PokemonV2ItemattributeVarSampFieldsModelType } from "./PokemonV2ItemattributeVarSampFieldsModel"
import { PokemonV2ItemattributeVarSampFieldsModelSelector } from "./PokemonV2ItemattributeVarSampFieldsModel.base"
import { PokemonV2ItemattributeVarianceFieldsModel, PokemonV2ItemattributeVarianceFieldsModelType } from "./PokemonV2ItemattributeVarianceFieldsModel"
import { PokemonV2ItemattributeVarianceFieldsModelSelector } from "./PokemonV2ItemattributeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_aggregate_fields"), "pokemon_v2_itemattribute_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemattributeAvgFieldsModelSelector | ((selector: PokemonV2ItemattributeAvgFieldsModelSelector) => PokemonV2ItemattributeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemattributeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemattributeMaxFieldsModelSelector | ((selector: PokemonV2ItemattributeMaxFieldsModelSelector) => PokemonV2ItemattributeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemattributeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemattributeMinFieldsModelSelector | ((selector: PokemonV2ItemattributeMinFieldsModelSelector) => PokemonV2ItemattributeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemattributeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemattributeStddevFieldsModelSelector | ((selector: PokemonV2ItemattributeStddevFieldsModelSelector) => PokemonV2ItemattributeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemattributeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemattributeStddevPopFieldsModelSelector | ((selector: PokemonV2ItemattributeStddevPopFieldsModelSelector) => PokemonV2ItemattributeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemattributeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemattributeStddevSampFieldsModelSelector | ((selector: PokemonV2ItemattributeStddevSampFieldsModelSelector) => PokemonV2ItemattributeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemattributeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemattributeSumFieldsModelSelector | ((selector: PokemonV2ItemattributeSumFieldsModelSelector) => PokemonV2ItemattributeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemattributeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemattributeVarPopFieldsModelSelector | ((selector: PokemonV2ItemattributeVarPopFieldsModelSelector) => PokemonV2ItemattributeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemattributeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemattributeVarSampFieldsModelSelector | ((selector: PokemonV2ItemattributeVarSampFieldsModelSelector) => PokemonV2ItemattributeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemattributeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemattributeVarianceFieldsModelSelector | ((selector: PokemonV2ItemattributeVarianceFieldsModelSelector) => PokemonV2ItemattributeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemattributeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributeAggregateFields() {
  return new PokemonV2ItemattributeAggregateFieldsModelSelector()
}

export const pokemonV2ItemattributeAggregateFieldsModelPrimitives = selectFromPokemonV2ItemattributeAggregateFields().count
