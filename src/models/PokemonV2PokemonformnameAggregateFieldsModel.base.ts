/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformnameAvgFieldsModel, PokemonV2PokemonformnameAvgFieldsModelType } from "./PokemonV2PokemonformnameAvgFieldsModel"
import { PokemonV2PokemonformnameAvgFieldsModelSelector } from "./PokemonV2PokemonformnameAvgFieldsModel.base"
import { PokemonV2PokemonformnameMaxFieldsModel, PokemonV2PokemonformnameMaxFieldsModelType } from "./PokemonV2PokemonformnameMaxFieldsModel"
import { PokemonV2PokemonformnameMaxFieldsModelSelector } from "./PokemonV2PokemonformnameMaxFieldsModel.base"
import { PokemonV2PokemonformnameMinFieldsModel, PokemonV2PokemonformnameMinFieldsModelType } from "./PokemonV2PokemonformnameMinFieldsModel"
import { PokemonV2PokemonformnameMinFieldsModelSelector } from "./PokemonV2PokemonformnameMinFieldsModel.base"
import { PokemonV2PokemonformnameStddevFieldsModel, PokemonV2PokemonformnameStddevFieldsModelType } from "./PokemonV2PokemonformnameStddevFieldsModel"
import { PokemonV2PokemonformnameStddevFieldsModelSelector } from "./PokemonV2PokemonformnameStddevFieldsModel.base"
import { PokemonV2PokemonformnameStddevPopFieldsModel, PokemonV2PokemonformnameStddevPopFieldsModelType } from "./PokemonV2PokemonformnameStddevPopFieldsModel"
import { PokemonV2PokemonformnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonformnameStddevPopFieldsModel.base"
import { PokemonV2PokemonformnameStddevSampFieldsModel, PokemonV2PokemonformnameStddevSampFieldsModelType } from "./PokemonV2PokemonformnameStddevSampFieldsModel"
import { PokemonV2PokemonformnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonformnameStddevSampFieldsModel.base"
import { PokemonV2PokemonformnameSumFieldsModel, PokemonV2PokemonformnameSumFieldsModelType } from "./PokemonV2PokemonformnameSumFieldsModel"
import { PokemonV2PokemonformnameSumFieldsModelSelector } from "./PokemonV2PokemonformnameSumFieldsModel.base"
import { PokemonV2PokemonformnameVarPopFieldsModel, PokemonV2PokemonformnameVarPopFieldsModelType } from "./PokemonV2PokemonformnameVarPopFieldsModel"
import { PokemonV2PokemonformnameVarPopFieldsModelSelector } from "./PokemonV2PokemonformnameVarPopFieldsModel.base"
import { PokemonV2PokemonformnameVarSampFieldsModel, PokemonV2PokemonformnameVarSampFieldsModelType } from "./PokemonV2PokemonformnameVarSampFieldsModel"
import { PokemonV2PokemonformnameVarSampFieldsModelSelector } from "./PokemonV2PokemonformnameVarSampFieldsModel.base"
import { PokemonV2PokemonformnameVarianceFieldsModel, PokemonV2PokemonformnameVarianceFieldsModelType } from "./PokemonV2PokemonformnameVarianceFieldsModel"
import { PokemonV2PokemonformnameVarianceFieldsModelSelector } from "./PokemonV2PokemonformnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_aggregate_fields"), "pokemon_v2_pokemonformname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonformnameAvgFieldsModelSelector | ((selector: PokemonV2PokemonformnameAvgFieldsModelSelector) => PokemonV2PokemonformnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonformnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonformnameMaxFieldsModelSelector | ((selector: PokemonV2PokemonformnameMaxFieldsModelSelector) => PokemonV2PokemonformnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonformnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonformnameMinFieldsModelSelector | ((selector: PokemonV2PokemonformnameMinFieldsModelSelector) => PokemonV2PokemonformnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonformnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonformnameStddevFieldsModelSelector | ((selector: PokemonV2PokemonformnameStddevFieldsModelSelector) => PokemonV2PokemonformnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonformnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonformnameStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonformnameStddevPopFieldsModelSelector) => PokemonV2PokemonformnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonformnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonformnameStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonformnameStddevSampFieldsModelSelector) => PokemonV2PokemonformnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonformnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonformnameSumFieldsModelSelector | ((selector: PokemonV2PokemonformnameSumFieldsModelSelector) => PokemonV2PokemonformnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonformnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonformnameVarPopFieldsModelSelector | ((selector: PokemonV2PokemonformnameVarPopFieldsModelSelector) => PokemonV2PokemonformnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonformnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonformnameVarSampFieldsModelSelector | ((selector: PokemonV2PokemonformnameVarSampFieldsModelSelector) => PokemonV2PokemonformnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonformnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonformnameVarianceFieldsModelSelector | ((selector: PokemonV2PokemonformnameVarianceFieldsModelSelector) => PokemonV2PokemonformnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonformnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformnameAggregateFields() {
  return new PokemonV2PokemonformnameAggregateFieldsModelSelector()
}

export const pokemonV2PokemonformnameAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonformnameAggregateFields().count
