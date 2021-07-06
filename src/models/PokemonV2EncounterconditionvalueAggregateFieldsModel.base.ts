/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvalueAvgFieldsModel, PokemonV2EncounterconditionvalueAvgFieldsModelType } from "./PokemonV2EncounterconditionvalueAvgFieldsModel"
import { PokemonV2EncounterconditionvalueAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvalueAvgFieldsModel.base"
import { PokemonV2EncounterconditionvalueMaxFieldsModel, PokemonV2EncounterconditionvalueMaxFieldsModelType } from "./PokemonV2EncounterconditionvalueMaxFieldsModel"
import { PokemonV2EncounterconditionvalueMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvalueMaxFieldsModel.base"
import { PokemonV2EncounterconditionvalueMinFieldsModel, PokemonV2EncounterconditionvalueMinFieldsModelType } from "./PokemonV2EncounterconditionvalueMinFieldsModel"
import { PokemonV2EncounterconditionvalueMinFieldsModelSelector } from "./PokemonV2EncounterconditionvalueMinFieldsModel.base"
import { PokemonV2EncounterconditionvalueStddevFieldsModel, PokemonV2EncounterconditionvalueStddevFieldsModelType } from "./PokemonV2EncounterconditionvalueStddevFieldsModel"
import { PokemonV2EncounterconditionvalueStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevFieldsModel.base"
import { PokemonV2EncounterconditionvalueStddevPopFieldsModel, PokemonV2EncounterconditionvalueStddevPopFieldsModelType } from "./PokemonV2EncounterconditionvalueStddevPopFieldsModel"
import { PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevPopFieldsModel.base"
import { PokemonV2EncounterconditionvalueStddevSampFieldsModel, PokemonV2EncounterconditionvalueStddevSampFieldsModelType } from "./PokemonV2EncounterconditionvalueStddevSampFieldsModel"
import { PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevSampFieldsModel.base"
import { PokemonV2EncounterconditionvalueSumFieldsModel, PokemonV2EncounterconditionvalueSumFieldsModelType } from "./PokemonV2EncounterconditionvalueSumFieldsModel"
import { PokemonV2EncounterconditionvalueSumFieldsModelSelector } from "./PokemonV2EncounterconditionvalueSumFieldsModel.base"
import { PokemonV2EncounterconditionvalueVarPopFieldsModel, PokemonV2EncounterconditionvalueVarPopFieldsModelType } from "./PokemonV2EncounterconditionvalueVarPopFieldsModel"
import { PokemonV2EncounterconditionvalueVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarPopFieldsModel.base"
import { PokemonV2EncounterconditionvalueVarSampFieldsModel, PokemonV2EncounterconditionvalueVarSampFieldsModelType } from "./PokemonV2EncounterconditionvalueVarSampFieldsModel"
import { PokemonV2EncounterconditionvalueVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarSampFieldsModel.base"
import { PokemonV2EncounterconditionvalueVarianceFieldsModel, PokemonV2EncounterconditionvalueVarianceFieldsModelType } from "./PokemonV2EncounterconditionvalueVarianceFieldsModel"
import { PokemonV2EncounterconditionvalueVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_aggregate_fields"), "pokemon_v2_encounterconditionvalue_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterconditionvalueAvgFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueAvgFieldsModelSelector) => PokemonV2EncounterconditionvalueAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterconditionvalueAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterconditionvalueMaxFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueMaxFieldsModelSelector) => PokemonV2EncounterconditionvalueMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterconditionvalueMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterconditionvalueMinFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueMinFieldsModelSelector) => PokemonV2EncounterconditionvalueMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterconditionvalueMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterconditionvalueStddevFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueStddevFieldsModelSelector) => PokemonV2EncounterconditionvalueStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterconditionvalueStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector) => PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector) => PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterconditionvalueSumFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueSumFieldsModelSelector) => PokemonV2EncounterconditionvalueSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterconditionvalueSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterconditionvalueVarPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueVarPopFieldsModelSelector) => PokemonV2EncounterconditionvalueVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterconditionvalueVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterconditionvalueVarSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueVarSampFieldsModelSelector) => PokemonV2EncounterconditionvalueVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterconditionvalueVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterconditionvalueVarianceFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueVarianceFieldsModelSelector) => PokemonV2EncounterconditionvalueVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterconditionvalueVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvalueAggregateFields() {
  return new PokemonV2EncounterconditionvalueAggregateFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueAggregateFields().count
