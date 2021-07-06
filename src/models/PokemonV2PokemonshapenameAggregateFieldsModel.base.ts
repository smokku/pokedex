/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonshapenameAvgFieldsModel, PokemonV2PokemonshapenameAvgFieldsModelType } from "./PokemonV2PokemonshapenameAvgFieldsModel"
import { PokemonV2PokemonshapenameAvgFieldsModelSelector } from "./PokemonV2PokemonshapenameAvgFieldsModel.base"
import { PokemonV2PokemonshapenameMaxFieldsModel, PokemonV2PokemonshapenameMaxFieldsModelType } from "./PokemonV2PokemonshapenameMaxFieldsModel"
import { PokemonV2PokemonshapenameMaxFieldsModelSelector } from "./PokemonV2PokemonshapenameMaxFieldsModel.base"
import { PokemonV2PokemonshapenameMinFieldsModel, PokemonV2PokemonshapenameMinFieldsModelType } from "./PokemonV2PokemonshapenameMinFieldsModel"
import { PokemonV2PokemonshapenameMinFieldsModelSelector } from "./PokemonV2PokemonshapenameMinFieldsModel.base"
import { PokemonV2PokemonshapenameStddevFieldsModel, PokemonV2PokemonshapenameStddevFieldsModelType } from "./PokemonV2PokemonshapenameStddevFieldsModel"
import { PokemonV2PokemonshapenameStddevFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevFieldsModel.base"
import { PokemonV2PokemonshapenameStddevPopFieldsModel, PokemonV2PokemonshapenameStddevPopFieldsModelType } from "./PokemonV2PokemonshapenameStddevPopFieldsModel"
import { PokemonV2PokemonshapenameStddevPopFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevPopFieldsModel.base"
import { PokemonV2PokemonshapenameStddevSampFieldsModel, PokemonV2PokemonshapenameStddevSampFieldsModelType } from "./PokemonV2PokemonshapenameStddevSampFieldsModel"
import { PokemonV2PokemonshapenameStddevSampFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevSampFieldsModel.base"
import { PokemonV2PokemonshapenameSumFieldsModel, PokemonV2PokemonshapenameSumFieldsModelType } from "./PokemonV2PokemonshapenameSumFieldsModel"
import { PokemonV2PokemonshapenameSumFieldsModelSelector } from "./PokemonV2PokemonshapenameSumFieldsModel.base"
import { PokemonV2PokemonshapenameVarPopFieldsModel, PokemonV2PokemonshapenameVarPopFieldsModelType } from "./PokemonV2PokemonshapenameVarPopFieldsModel"
import { PokemonV2PokemonshapenameVarPopFieldsModelSelector } from "./PokemonV2PokemonshapenameVarPopFieldsModel.base"
import { PokemonV2PokemonshapenameVarSampFieldsModel, PokemonV2PokemonshapenameVarSampFieldsModelType } from "./PokemonV2PokemonshapenameVarSampFieldsModel"
import { PokemonV2PokemonshapenameVarSampFieldsModelSelector } from "./PokemonV2PokemonshapenameVarSampFieldsModel.base"
import { PokemonV2PokemonshapenameVarianceFieldsModel, PokemonV2PokemonshapenameVarianceFieldsModelType } from "./PokemonV2PokemonshapenameVarianceFieldsModel"
import { PokemonV2PokemonshapenameVarianceFieldsModelSelector } from "./PokemonV2PokemonshapenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_aggregate_fields"), "pokemon_v2_pokemonshapename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonshapenameAvgFieldsModelSelector | ((selector: PokemonV2PokemonshapenameAvgFieldsModelSelector) => PokemonV2PokemonshapenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonshapenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonshapenameMaxFieldsModelSelector | ((selector: PokemonV2PokemonshapenameMaxFieldsModelSelector) => PokemonV2PokemonshapenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonshapenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonshapenameMinFieldsModelSelector | ((selector: PokemonV2PokemonshapenameMinFieldsModelSelector) => PokemonV2PokemonshapenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonshapenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonshapenameStddevFieldsModelSelector | ((selector: PokemonV2PokemonshapenameStddevFieldsModelSelector) => PokemonV2PokemonshapenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonshapenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonshapenameStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonshapenameStddevPopFieldsModelSelector) => PokemonV2PokemonshapenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonshapenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonshapenameStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonshapenameStddevSampFieldsModelSelector) => PokemonV2PokemonshapenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonshapenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonshapenameSumFieldsModelSelector | ((selector: PokemonV2PokemonshapenameSumFieldsModelSelector) => PokemonV2PokemonshapenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonshapenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonshapenameVarPopFieldsModelSelector | ((selector: PokemonV2PokemonshapenameVarPopFieldsModelSelector) => PokemonV2PokemonshapenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonshapenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonshapenameVarSampFieldsModelSelector | ((selector: PokemonV2PokemonshapenameVarSampFieldsModelSelector) => PokemonV2PokemonshapenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonshapenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonshapenameVarianceFieldsModelSelector | ((selector: PokemonV2PokemonshapenameVarianceFieldsModelSelector) => PokemonV2PokemonshapenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonshapenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonshapenameAggregateFields() {
  return new PokemonV2PokemonshapenameAggregateFieldsModelSelector()
}

export const pokemonV2PokemonshapenameAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameAggregateFields().count
