/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkareanameAvgFieldsModel, PokemonV2PalparkareanameAvgFieldsModelType } from "./PokemonV2PalparkareanameAvgFieldsModel"
import { PokemonV2PalparkareanameAvgFieldsModelSelector } from "./PokemonV2PalparkareanameAvgFieldsModel.base"
import { PokemonV2PalparkareanameMaxFieldsModel, PokemonV2PalparkareanameMaxFieldsModelType } from "./PokemonV2PalparkareanameMaxFieldsModel"
import { PokemonV2PalparkareanameMaxFieldsModelSelector } from "./PokemonV2PalparkareanameMaxFieldsModel.base"
import { PokemonV2PalparkareanameMinFieldsModel, PokemonV2PalparkareanameMinFieldsModelType } from "./PokemonV2PalparkareanameMinFieldsModel"
import { PokemonV2PalparkareanameMinFieldsModelSelector } from "./PokemonV2PalparkareanameMinFieldsModel.base"
import { PokemonV2PalparkareanameStddevFieldsModel, PokemonV2PalparkareanameStddevFieldsModelType } from "./PokemonV2PalparkareanameStddevFieldsModel"
import { PokemonV2PalparkareanameStddevFieldsModelSelector } from "./PokemonV2PalparkareanameStddevFieldsModel.base"
import { PokemonV2PalparkareanameStddevPopFieldsModel, PokemonV2PalparkareanameStddevPopFieldsModelType } from "./PokemonV2PalparkareanameStddevPopFieldsModel"
import { PokemonV2PalparkareanameStddevPopFieldsModelSelector } from "./PokemonV2PalparkareanameStddevPopFieldsModel.base"
import { PokemonV2PalparkareanameStddevSampFieldsModel, PokemonV2PalparkareanameStddevSampFieldsModelType } from "./PokemonV2PalparkareanameStddevSampFieldsModel"
import { PokemonV2PalparkareanameStddevSampFieldsModelSelector } from "./PokemonV2PalparkareanameStddevSampFieldsModel.base"
import { PokemonV2PalparkareanameSumFieldsModel, PokemonV2PalparkareanameSumFieldsModelType } from "./PokemonV2PalparkareanameSumFieldsModel"
import { PokemonV2PalparkareanameSumFieldsModelSelector } from "./PokemonV2PalparkareanameSumFieldsModel.base"
import { PokemonV2PalparkareanameVarPopFieldsModel, PokemonV2PalparkareanameVarPopFieldsModelType } from "./PokemonV2PalparkareanameVarPopFieldsModel"
import { PokemonV2PalparkareanameVarPopFieldsModelSelector } from "./PokemonV2PalparkareanameVarPopFieldsModel.base"
import { PokemonV2PalparkareanameVarSampFieldsModel, PokemonV2PalparkareanameVarSampFieldsModelType } from "./PokemonV2PalparkareanameVarSampFieldsModel"
import { PokemonV2PalparkareanameVarSampFieldsModelSelector } from "./PokemonV2PalparkareanameVarSampFieldsModel.base"
import { PokemonV2PalparkareanameVarianceFieldsModel, PokemonV2PalparkareanameVarianceFieldsModelType } from "./PokemonV2PalparkareanameVarianceFieldsModel"
import { PokemonV2PalparkareanameVarianceFieldsModelSelector } from "./PokemonV2PalparkareanameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_aggregate_fields"), "pokemon_v2_palparkareaname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PalparkareanameAvgFieldsModelSelector | ((selector: PokemonV2PalparkareanameAvgFieldsModelSelector) => PokemonV2PalparkareanameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PalparkareanameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PalparkareanameMaxFieldsModelSelector | ((selector: PokemonV2PalparkareanameMaxFieldsModelSelector) => PokemonV2PalparkareanameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PalparkareanameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PalparkareanameMinFieldsModelSelector | ((selector: PokemonV2PalparkareanameMinFieldsModelSelector) => PokemonV2PalparkareanameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PalparkareanameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PalparkareanameStddevFieldsModelSelector | ((selector: PokemonV2PalparkareanameStddevFieldsModelSelector) => PokemonV2PalparkareanameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PalparkareanameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PalparkareanameStddevPopFieldsModelSelector | ((selector: PokemonV2PalparkareanameStddevPopFieldsModelSelector) => PokemonV2PalparkareanameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PalparkareanameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PalparkareanameStddevSampFieldsModelSelector | ((selector: PokemonV2PalparkareanameStddevSampFieldsModelSelector) => PokemonV2PalparkareanameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PalparkareanameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PalparkareanameSumFieldsModelSelector | ((selector: PokemonV2PalparkareanameSumFieldsModelSelector) => PokemonV2PalparkareanameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PalparkareanameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PalparkareanameVarPopFieldsModelSelector | ((selector: PokemonV2PalparkareanameVarPopFieldsModelSelector) => PokemonV2PalparkareanameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PalparkareanameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PalparkareanameVarSampFieldsModelSelector | ((selector: PokemonV2PalparkareanameVarSampFieldsModelSelector) => PokemonV2PalparkareanameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PalparkareanameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PalparkareanameVarianceFieldsModelSelector | ((selector: PokemonV2PalparkareanameVarianceFieldsModelSelector) => PokemonV2PalparkareanameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PalparkareanameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PalparkareanameAggregateFields() {
  return new PokemonV2PalparkareanameAggregateFieldsModelSelector()
}

export const pokemonV2PalparkareanameAggregateFieldsModelPrimitives = selectFromPokemonV2PalparkareanameAggregateFields().count
