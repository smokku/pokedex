/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributeAvgFieldsModel, PokemonV2MoveattributeAvgFieldsModelType } from "./PokemonV2MoveattributeAvgFieldsModel"
import { PokemonV2MoveattributeAvgFieldsModelSelector } from "./PokemonV2MoveattributeAvgFieldsModel.base"
import { PokemonV2MoveattributeMaxFieldsModel, PokemonV2MoveattributeMaxFieldsModelType } from "./PokemonV2MoveattributeMaxFieldsModel"
import { PokemonV2MoveattributeMaxFieldsModelSelector } from "./PokemonV2MoveattributeMaxFieldsModel.base"
import { PokemonV2MoveattributeMinFieldsModel, PokemonV2MoveattributeMinFieldsModelType } from "./PokemonV2MoveattributeMinFieldsModel"
import { PokemonV2MoveattributeMinFieldsModelSelector } from "./PokemonV2MoveattributeMinFieldsModel.base"
import { PokemonV2MoveattributeStddevFieldsModel, PokemonV2MoveattributeStddevFieldsModelType } from "./PokemonV2MoveattributeStddevFieldsModel"
import { PokemonV2MoveattributeStddevFieldsModelSelector } from "./PokemonV2MoveattributeStddevFieldsModel.base"
import { PokemonV2MoveattributeStddevPopFieldsModel, PokemonV2MoveattributeStddevPopFieldsModelType } from "./PokemonV2MoveattributeStddevPopFieldsModel"
import { PokemonV2MoveattributeStddevPopFieldsModelSelector } from "./PokemonV2MoveattributeStddevPopFieldsModel.base"
import { PokemonV2MoveattributeStddevSampFieldsModel, PokemonV2MoveattributeStddevSampFieldsModelType } from "./PokemonV2MoveattributeStddevSampFieldsModel"
import { PokemonV2MoveattributeStddevSampFieldsModelSelector } from "./PokemonV2MoveattributeStddevSampFieldsModel.base"
import { PokemonV2MoveattributeSumFieldsModel, PokemonV2MoveattributeSumFieldsModelType } from "./PokemonV2MoveattributeSumFieldsModel"
import { PokemonV2MoveattributeSumFieldsModelSelector } from "./PokemonV2MoveattributeSumFieldsModel.base"
import { PokemonV2MoveattributeVarPopFieldsModel, PokemonV2MoveattributeVarPopFieldsModelType } from "./PokemonV2MoveattributeVarPopFieldsModel"
import { PokemonV2MoveattributeVarPopFieldsModelSelector } from "./PokemonV2MoveattributeVarPopFieldsModel.base"
import { PokemonV2MoveattributeVarSampFieldsModel, PokemonV2MoveattributeVarSampFieldsModelType } from "./PokemonV2MoveattributeVarSampFieldsModel"
import { PokemonV2MoveattributeVarSampFieldsModelSelector } from "./PokemonV2MoveattributeVarSampFieldsModel.base"
import { PokemonV2MoveattributeVarianceFieldsModel, PokemonV2MoveattributeVarianceFieldsModelType } from "./PokemonV2MoveattributeVarianceFieldsModel"
import { PokemonV2MoveattributeVarianceFieldsModelSelector } from "./PokemonV2MoveattributeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_aggregate_fields"), "pokemon_v2_moveattribute_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveattributeAvgFieldsModelSelector | ((selector: PokemonV2MoveattributeAvgFieldsModelSelector) => PokemonV2MoveattributeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveattributeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveattributeMaxFieldsModelSelector | ((selector: PokemonV2MoveattributeMaxFieldsModelSelector) => PokemonV2MoveattributeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveattributeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveattributeMinFieldsModelSelector | ((selector: PokemonV2MoveattributeMinFieldsModelSelector) => PokemonV2MoveattributeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveattributeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveattributeStddevFieldsModelSelector | ((selector: PokemonV2MoveattributeStddevFieldsModelSelector) => PokemonV2MoveattributeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveattributeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveattributeStddevPopFieldsModelSelector | ((selector: PokemonV2MoveattributeStddevPopFieldsModelSelector) => PokemonV2MoveattributeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveattributeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveattributeStddevSampFieldsModelSelector | ((selector: PokemonV2MoveattributeStddevSampFieldsModelSelector) => PokemonV2MoveattributeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveattributeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveattributeSumFieldsModelSelector | ((selector: PokemonV2MoveattributeSumFieldsModelSelector) => PokemonV2MoveattributeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveattributeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveattributeVarPopFieldsModelSelector | ((selector: PokemonV2MoveattributeVarPopFieldsModelSelector) => PokemonV2MoveattributeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveattributeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveattributeVarSampFieldsModelSelector | ((selector: PokemonV2MoveattributeVarSampFieldsModelSelector) => PokemonV2MoveattributeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveattributeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveattributeVarianceFieldsModelSelector | ((selector: PokemonV2MoveattributeVarianceFieldsModelSelector) => PokemonV2MoveattributeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveattributeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributeAggregateFields() {
  return new PokemonV2MoveattributeAggregateFieldsModelSelector()
}

export const pokemonV2MoveattributeAggregateFieldsModelPrimitives = selectFromPokemonV2MoveattributeAggregateFields().count
