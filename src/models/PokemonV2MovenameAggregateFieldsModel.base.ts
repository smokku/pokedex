/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovenameAvgFieldsModel, PokemonV2MovenameAvgFieldsModelType } from "./PokemonV2MovenameAvgFieldsModel"
import { PokemonV2MovenameAvgFieldsModelSelector } from "./PokemonV2MovenameAvgFieldsModel.base"
import { PokemonV2MovenameMaxFieldsModel, PokemonV2MovenameMaxFieldsModelType } from "./PokemonV2MovenameMaxFieldsModel"
import { PokemonV2MovenameMaxFieldsModelSelector } from "./PokemonV2MovenameMaxFieldsModel.base"
import { PokemonV2MovenameMinFieldsModel, PokemonV2MovenameMinFieldsModelType } from "./PokemonV2MovenameMinFieldsModel"
import { PokemonV2MovenameMinFieldsModelSelector } from "./PokemonV2MovenameMinFieldsModel.base"
import { PokemonV2MovenameStddevFieldsModel, PokemonV2MovenameStddevFieldsModelType } from "./PokemonV2MovenameStddevFieldsModel"
import { PokemonV2MovenameStddevFieldsModelSelector } from "./PokemonV2MovenameStddevFieldsModel.base"
import { PokemonV2MovenameStddevPopFieldsModel, PokemonV2MovenameStddevPopFieldsModelType } from "./PokemonV2MovenameStddevPopFieldsModel"
import { PokemonV2MovenameStddevPopFieldsModelSelector } from "./PokemonV2MovenameStddevPopFieldsModel.base"
import { PokemonV2MovenameStddevSampFieldsModel, PokemonV2MovenameStddevSampFieldsModelType } from "./PokemonV2MovenameStddevSampFieldsModel"
import { PokemonV2MovenameStddevSampFieldsModelSelector } from "./PokemonV2MovenameStddevSampFieldsModel.base"
import { PokemonV2MovenameSumFieldsModel, PokemonV2MovenameSumFieldsModelType } from "./PokemonV2MovenameSumFieldsModel"
import { PokemonV2MovenameSumFieldsModelSelector } from "./PokemonV2MovenameSumFieldsModel.base"
import { PokemonV2MovenameVarPopFieldsModel, PokemonV2MovenameVarPopFieldsModelType } from "./PokemonV2MovenameVarPopFieldsModel"
import { PokemonV2MovenameVarPopFieldsModelSelector } from "./PokemonV2MovenameVarPopFieldsModel.base"
import { PokemonV2MovenameVarSampFieldsModel, PokemonV2MovenameVarSampFieldsModelType } from "./PokemonV2MovenameVarSampFieldsModel"
import { PokemonV2MovenameVarSampFieldsModelSelector } from "./PokemonV2MovenameVarSampFieldsModel.base"
import { PokemonV2MovenameVarianceFieldsModel, PokemonV2MovenameVarianceFieldsModelType } from "./PokemonV2MovenameVarianceFieldsModel"
import { PokemonV2MovenameVarianceFieldsModelSelector } from "./PokemonV2MovenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movename"
 */
export const PokemonV2MovenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_aggregate_fields"), "pokemon_v2_movename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovenameAvgFieldsModelSelector | ((selector: PokemonV2MovenameAvgFieldsModelSelector) => PokemonV2MovenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovenameMaxFieldsModelSelector | ((selector: PokemonV2MovenameMaxFieldsModelSelector) => PokemonV2MovenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovenameMinFieldsModelSelector | ((selector: PokemonV2MovenameMinFieldsModelSelector) => PokemonV2MovenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovenameStddevFieldsModelSelector | ((selector: PokemonV2MovenameStddevFieldsModelSelector) => PokemonV2MovenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovenameStddevPopFieldsModelSelector | ((selector: PokemonV2MovenameStddevPopFieldsModelSelector) => PokemonV2MovenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovenameStddevSampFieldsModelSelector | ((selector: PokemonV2MovenameStddevSampFieldsModelSelector) => PokemonV2MovenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovenameSumFieldsModelSelector | ((selector: PokemonV2MovenameSumFieldsModelSelector) => PokemonV2MovenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovenameVarPopFieldsModelSelector | ((selector: PokemonV2MovenameVarPopFieldsModelSelector) => PokemonV2MovenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovenameVarSampFieldsModelSelector | ((selector: PokemonV2MovenameVarSampFieldsModelSelector) => PokemonV2MovenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovenameVarianceFieldsModelSelector | ((selector: PokemonV2MovenameVarianceFieldsModelSelector) => PokemonV2MovenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovenameAggregateFields() {
  return new PokemonV2MovenameAggregateFieldsModelSelector()
}

export const pokemonV2MovenameAggregateFieldsModelPrimitives = selectFromPokemonV2MovenameAggregateFields().count
