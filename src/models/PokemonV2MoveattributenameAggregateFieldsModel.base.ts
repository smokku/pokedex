/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributenameAvgFieldsModel, PokemonV2MoveattributenameAvgFieldsModelType } from "./PokemonV2MoveattributenameAvgFieldsModel"
import { PokemonV2MoveattributenameAvgFieldsModelSelector } from "./PokemonV2MoveattributenameAvgFieldsModel.base"
import { PokemonV2MoveattributenameMaxFieldsModel, PokemonV2MoveattributenameMaxFieldsModelType } from "./PokemonV2MoveattributenameMaxFieldsModel"
import { PokemonV2MoveattributenameMaxFieldsModelSelector } from "./PokemonV2MoveattributenameMaxFieldsModel.base"
import { PokemonV2MoveattributenameMinFieldsModel, PokemonV2MoveattributenameMinFieldsModelType } from "./PokemonV2MoveattributenameMinFieldsModel"
import { PokemonV2MoveattributenameMinFieldsModelSelector } from "./PokemonV2MoveattributenameMinFieldsModel.base"
import { PokemonV2MoveattributenameStddevFieldsModel, PokemonV2MoveattributenameStddevFieldsModelType } from "./PokemonV2MoveattributenameStddevFieldsModel"
import { PokemonV2MoveattributenameStddevFieldsModelSelector } from "./PokemonV2MoveattributenameStddevFieldsModel.base"
import { PokemonV2MoveattributenameStddevPopFieldsModel, PokemonV2MoveattributenameStddevPopFieldsModelType } from "./PokemonV2MoveattributenameStddevPopFieldsModel"
import { PokemonV2MoveattributenameStddevPopFieldsModelSelector } from "./PokemonV2MoveattributenameStddevPopFieldsModel.base"
import { PokemonV2MoveattributenameStddevSampFieldsModel, PokemonV2MoveattributenameStddevSampFieldsModelType } from "./PokemonV2MoveattributenameStddevSampFieldsModel"
import { PokemonV2MoveattributenameStddevSampFieldsModelSelector } from "./PokemonV2MoveattributenameStddevSampFieldsModel.base"
import { PokemonV2MoveattributenameSumFieldsModel, PokemonV2MoveattributenameSumFieldsModelType } from "./PokemonV2MoveattributenameSumFieldsModel"
import { PokemonV2MoveattributenameSumFieldsModelSelector } from "./PokemonV2MoveattributenameSumFieldsModel.base"
import { PokemonV2MoveattributenameVarPopFieldsModel, PokemonV2MoveattributenameVarPopFieldsModelType } from "./PokemonV2MoveattributenameVarPopFieldsModel"
import { PokemonV2MoveattributenameVarPopFieldsModelSelector } from "./PokemonV2MoveattributenameVarPopFieldsModel.base"
import { PokemonV2MoveattributenameVarSampFieldsModel, PokemonV2MoveattributenameVarSampFieldsModelType } from "./PokemonV2MoveattributenameVarSampFieldsModel"
import { PokemonV2MoveattributenameVarSampFieldsModelSelector } from "./PokemonV2MoveattributenameVarSampFieldsModel.base"
import { PokemonV2MoveattributenameVarianceFieldsModel, PokemonV2MoveattributenameVarianceFieldsModelType } from "./PokemonV2MoveattributenameVarianceFieldsModel"
import { PokemonV2MoveattributenameVarianceFieldsModelSelector } from "./PokemonV2MoveattributenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveattributenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename_aggregate_fields"), "pokemon_v2_moveattributename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveattributenameAvgFieldsModelSelector | ((selector: PokemonV2MoveattributenameAvgFieldsModelSelector) => PokemonV2MoveattributenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveattributenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveattributenameMaxFieldsModelSelector | ((selector: PokemonV2MoveattributenameMaxFieldsModelSelector) => PokemonV2MoveattributenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveattributenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveattributenameMinFieldsModelSelector | ((selector: PokemonV2MoveattributenameMinFieldsModelSelector) => PokemonV2MoveattributenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveattributenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveattributenameStddevFieldsModelSelector | ((selector: PokemonV2MoveattributenameStddevFieldsModelSelector) => PokemonV2MoveattributenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveattributenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveattributenameStddevPopFieldsModelSelector | ((selector: PokemonV2MoveattributenameStddevPopFieldsModelSelector) => PokemonV2MoveattributenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveattributenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveattributenameStddevSampFieldsModelSelector | ((selector: PokemonV2MoveattributenameStddevSampFieldsModelSelector) => PokemonV2MoveattributenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveattributenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveattributenameSumFieldsModelSelector | ((selector: PokemonV2MoveattributenameSumFieldsModelSelector) => PokemonV2MoveattributenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveattributenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveattributenameVarPopFieldsModelSelector | ((selector: PokemonV2MoveattributenameVarPopFieldsModelSelector) => PokemonV2MoveattributenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveattributenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveattributenameVarSampFieldsModelSelector | ((selector: PokemonV2MoveattributenameVarSampFieldsModelSelector) => PokemonV2MoveattributenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveattributenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveattributenameVarianceFieldsModelSelector | ((selector: PokemonV2MoveattributenameVarianceFieldsModelSelector) => PokemonV2MoveattributenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveattributenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributenameAggregateFields() {
  return new PokemonV2MoveattributenameAggregateFieldsModelSelector()
}

export const pokemonV2MoveattributenameAggregateFieldsModelPrimitives = selectFromPokemonV2MoveattributenameAggregateFields().count
