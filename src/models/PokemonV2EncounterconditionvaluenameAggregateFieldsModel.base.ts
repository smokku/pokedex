/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvaluenameAvgFieldsModel, PokemonV2EncounterconditionvaluenameAvgFieldsModelType } from "./PokemonV2EncounterconditionvaluenameAvgFieldsModel"
import { PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameAvgFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameMaxFieldsModel, PokemonV2EncounterconditionvaluenameMaxFieldsModelType } from "./PokemonV2EncounterconditionvaluenameMaxFieldsModel"
import { PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameMaxFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameMinFieldsModel, PokemonV2EncounterconditionvaluenameMinFieldsModelType } from "./PokemonV2EncounterconditionvaluenameMinFieldsModel"
import { PokemonV2EncounterconditionvaluenameMinFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameMinFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameStddevFieldsModel, PokemonV2EncounterconditionvaluenameStddevFieldsModelType } from "./PokemonV2EncounterconditionvaluenameStddevFieldsModel"
import { PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameStddevPopFieldsModel, PokemonV2EncounterconditionvaluenameStddevPopFieldsModelType } from "./PokemonV2EncounterconditionvaluenameStddevPopFieldsModel"
import { PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevPopFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameStddevSampFieldsModel, PokemonV2EncounterconditionvaluenameStddevSampFieldsModelType } from "./PokemonV2EncounterconditionvaluenameStddevSampFieldsModel"
import { PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevSampFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameSumFieldsModel, PokemonV2EncounterconditionvaluenameSumFieldsModelType } from "./PokemonV2EncounterconditionvaluenameSumFieldsModel"
import { PokemonV2EncounterconditionvaluenameSumFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameSumFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameVarPopFieldsModel, PokemonV2EncounterconditionvaluenameVarPopFieldsModelType } from "./PokemonV2EncounterconditionvaluenameVarPopFieldsModel"
import { PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarPopFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameVarSampFieldsModel, PokemonV2EncounterconditionvaluenameVarSampFieldsModelType } from "./PokemonV2EncounterconditionvaluenameVarSampFieldsModel"
import { PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarSampFieldsModel.base"
import { PokemonV2EncounterconditionvaluenameVarianceFieldsModel, PokemonV2EncounterconditionvaluenameVarianceFieldsModelType } from "./PokemonV2EncounterconditionvaluenameVarianceFieldsModel"
import { PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename_aggregate_fields"), "pokemon_v2_encounterconditionvaluename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector) => PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector) => PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterconditionvaluenameMinFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameMinFieldsModelSelector) => PokemonV2EncounterconditionvaluenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterconditionvaluenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector) => PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector) => PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector) => PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterconditionvaluenameSumFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameSumFieldsModelSelector) => PokemonV2EncounterconditionvaluenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterconditionvaluenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector) => PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector) => PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector) => PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvaluenameAggregateFields() {
  return new PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluenameAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluenameAggregateFields().count
