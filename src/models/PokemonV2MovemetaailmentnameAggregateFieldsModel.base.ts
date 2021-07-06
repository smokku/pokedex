/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaailmentnameAvgFieldsModel, PokemonV2MovemetaailmentnameAvgFieldsModelType } from "./PokemonV2MovemetaailmentnameAvgFieldsModel"
import { PokemonV2MovemetaailmentnameAvgFieldsModelSelector } from "./PokemonV2MovemetaailmentnameAvgFieldsModel.base"
import { PokemonV2MovemetaailmentnameMaxFieldsModel, PokemonV2MovemetaailmentnameMaxFieldsModelType } from "./PokemonV2MovemetaailmentnameMaxFieldsModel"
import { PokemonV2MovemetaailmentnameMaxFieldsModelSelector } from "./PokemonV2MovemetaailmentnameMaxFieldsModel.base"
import { PokemonV2MovemetaailmentnameMinFieldsModel, PokemonV2MovemetaailmentnameMinFieldsModelType } from "./PokemonV2MovemetaailmentnameMinFieldsModel"
import { PokemonV2MovemetaailmentnameMinFieldsModelSelector } from "./PokemonV2MovemetaailmentnameMinFieldsModel.base"
import { PokemonV2MovemetaailmentnameStddevFieldsModel, PokemonV2MovemetaailmentnameStddevFieldsModelType } from "./PokemonV2MovemetaailmentnameStddevFieldsModel"
import { PokemonV2MovemetaailmentnameStddevFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevFieldsModel.base"
import { PokemonV2MovemetaailmentnameStddevPopFieldsModel, PokemonV2MovemetaailmentnameStddevPopFieldsModelType } from "./PokemonV2MovemetaailmentnameStddevPopFieldsModel"
import { PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevPopFieldsModel.base"
import { PokemonV2MovemetaailmentnameStddevSampFieldsModel, PokemonV2MovemetaailmentnameStddevSampFieldsModelType } from "./PokemonV2MovemetaailmentnameStddevSampFieldsModel"
import { PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevSampFieldsModel.base"
import { PokemonV2MovemetaailmentnameSumFieldsModel, PokemonV2MovemetaailmentnameSumFieldsModelType } from "./PokemonV2MovemetaailmentnameSumFieldsModel"
import { PokemonV2MovemetaailmentnameSumFieldsModelSelector } from "./PokemonV2MovemetaailmentnameSumFieldsModel.base"
import { PokemonV2MovemetaailmentnameVarPopFieldsModel, PokemonV2MovemetaailmentnameVarPopFieldsModelType } from "./PokemonV2MovemetaailmentnameVarPopFieldsModel"
import { PokemonV2MovemetaailmentnameVarPopFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarPopFieldsModel.base"
import { PokemonV2MovemetaailmentnameVarSampFieldsModel, PokemonV2MovemetaailmentnameVarSampFieldsModelType } from "./PokemonV2MovemetaailmentnameVarSampFieldsModel"
import { PokemonV2MovemetaailmentnameVarSampFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarSampFieldsModel.base"
import { PokemonV2MovemetaailmentnameVarianceFieldsModel, PokemonV2MovemetaailmentnameVarianceFieldsModelType } from "./PokemonV2MovemetaailmentnameVarianceFieldsModel"
import { PokemonV2MovemetaailmentnameVarianceFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_aggregate_fields"), "pokemon_v2_movemetaailmentname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetaailmentnameAvgFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameAvgFieldsModelSelector) => PokemonV2MovemetaailmentnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetaailmentnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetaailmentnameMaxFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameMaxFieldsModelSelector) => PokemonV2MovemetaailmentnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetaailmentnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetaailmentnameMinFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameMinFieldsModelSelector) => PokemonV2MovemetaailmentnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetaailmentnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetaailmentnameStddevFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameStddevFieldsModelSelector) => PokemonV2MovemetaailmentnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetaailmentnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector) => PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector) => PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetaailmentnameSumFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameSumFieldsModelSelector) => PokemonV2MovemetaailmentnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetaailmentnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetaailmentnameVarPopFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameVarPopFieldsModelSelector) => PokemonV2MovemetaailmentnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetaailmentnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetaailmentnameVarSampFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameVarSampFieldsModelSelector) => PokemonV2MovemetaailmentnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetaailmentnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetaailmentnameVarianceFieldsModelSelector | ((selector: PokemonV2MovemetaailmentnameVarianceFieldsModelSelector) => PokemonV2MovemetaailmentnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetaailmentnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaailmentnameAggregateFields() {
  return new PokemonV2MovemetaailmentnameAggregateFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameAggregateFields().count
