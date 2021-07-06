/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethodnameAvgFieldsModel, PokemonV2MovelearnmethodnameAvgFieldsModelType } from "./PokemonV2MovelearnmethodnameAvgFieldsModel"
import { PokemonV2MovelearnmethodnameAvgFieldsModelSelector } from "./PokemonV2MovelearnmethodnameAvgFieldsModel.base"
import { PokemonV2MovelearnmethodnameMaxFieldsModel, PokemonV2MovelearnmethodnameMaxFieldsModelType } from "./PokemonV2MovelearnmethodnameMaxFieldsModel"
import { PokemonV2MovelearnmethodnameMaxFieldsModelSelector } from "./PokemonV2MovelearnmethodnameMaxFieldsModel.base"
import { PokemonV2MovelearnmethodnameMinFieldsModel, PokemonV2MovelearnmethodnameMinFieldsModelType } from "./PokemonV2MovelearnmethodnameMinFieldsModel"
import { PokemonV2MovelearnmethodnameMinFieldsModelSelector } from "./PokemonV2MovelearnmethodnameMinFieldsModel.base"
import { PokemonV2MovelearnmethodnameStddevFieldsModel, PokemonV2MovelearnmethodnameStddevFieldsModelType } from "./PokemonV2MovelearnmethodnameStddevFieldsModel"
import { PokemonV2MovelearnmethodnameStddevFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevFieldsModel.base"
import { PokemonV2MovelearnmethodnameStddevPopFieldsModel, PokemonV2MovelearnmethodnameStddevPopFieldsModelType } from "./PokemonV2MovelearnmethodnameStddevPopFieldsModel"
import { PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevPopFieldsModel.base"
import { PokemonV2MovelearnmethodnameStddevSampFieldsModel, PokemonV2MovelearnmethodnameStddevSampFieldsModelType } from "./PokemonV2MovelearnmethodnameStddevSampFieldsModel"
import { PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevSampFieldsModel.base"
import { PokemonV2MovelearnmethodnameSumFieldsModel, PokemonV2MovelearnmethodnameSumFieldsModelType } from "./PokemonV2MovelearnmethodnameSumFieldsModel"
import { PokemonV2MovelearnmethodnameSumFieldsModelSelector } from "./PokemonV2MovelearnmethodnameSumFieldsModel.base"
import { PokemonV2MovelearnmethodnameVarPopFieldsModel, PokemonV2MovelearnmethodnameVarPopFieldsModelType } from "./PokemonV2MovelearnmethodnameVarPopFieldsModel"
import { PokemonV2MovelearnmethodnameVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarPopFieldsModel.base"
import { PokemonV2MovelearnmethodnameVarSampFieldsModel, PokemonV2MovelearnmethodnameVarSampFieldsModelType } from "./PokemonV2MovelearnmethodnameVarSampFieldsModel"
import { PokemonV2MovelearnmethodnameVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarSampFieldsModel.base"
import { PokemonV2MovelearnmethodnameVarianceFieldsModel, PokemonV2MovelearnmethodnameVarianceFieldsModelType } from "./PokemonV2MovelearnmethodnameVarianceFieldsModel"
import { PokemonV2MovelearnmethodnameVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethodname_aggregate_fields"), "pokemon_v2_movelearnmethodname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovelearnmethodnameAvgFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameAvgFieldsModelSelector) => PokemonV2MovelearnmethodnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovelearnmethodnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovelearnmethodnameMaxFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameMaxFieldsModelSelector) => PokemonV2MovelearnmethodnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovelearnmethodnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovelearnmethodnameMinFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameMinFieldsModelSelector) => PokemonV2MovelearnmethodnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovelearnmethodnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovelearnmethodnameStddevFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameStddevFieldsModelSelector) => PokemonV2MovelearnmethodnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovelearnmethodnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector) => PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovelearnmethodnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector) => PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovelearnmethodnameSumFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameSumFieldsModelSelector) => PokemonV2MovelearnmethodnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovelearnmethodnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovelearnmethodnameVarPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameVarPopFieldsModelSelector) => PokemonV2MovelearnmethodnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovelearnmethodnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovelearnmethodnameVarSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameVarSampFieldsModelSelector) => PokemonV2MovelearnmethodnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovelearnmethodnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovelearnmethodnameVarianceFieldsModelSelector | ((selector: PokemonV2MovelearnmethodnameVarianceFieldsModelSelector) => PokemonV2MovelearnmethodnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovelearnmethodnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethodnameAggregateFields() {
  return new PokemonV2MovelearnmethodnameAggregateFieldsModelSelector()
}

export const pokemonV2MovelearnmethodnameAggregateFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodnameAggregateFields().count
