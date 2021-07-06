/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItempocketnameAvgFieldsModel, PokemonV2ItempocketnameAvgFieldsModelType } from "./PokemonV2ItempocketnameAvgFieldsModel"
import { PokemonV2ItempocketnameAvgFieldsModelSelector } from "./PokemonV2ItempocketnameAvgFieldsModel.base"
import { PokemonV2ItempocketnameMaxFieldsModel, PokemonV2ItempocketnameMaxFieldsModelType } from "./PokemonV2ItempocketnameMaxFieldsModel"
import { PokemonV2ItempocketnameMaxFieldsModelSelector } from "./PokemonV2ItempocketnameMaxFieldsModel.base"
import { PokemonV2ItempocketnameMinFieldsModel, PokemonV2ItempocketnameMinFieldsModelType } from "./PokemonV2ItempocketnameMinFieldsModel"
import { PokemonV2ItempocketnameMinFieldsModelSelector } from "./PokemonV2ItempocketnameMinFieldsModel.base"
import { PokemonV2ItempocketnameStddevFieldsModel, PokemonV2ItempocketnameStddevFieldsModelType } from "./PokemonV2ItempocketnameStddevFieldsModel"
import { PokemonV2ItempocketnameStddevFieldsModelSelector } from "./PokemonV2ItempocketnameStddevFieldsModel.base"
import { PokemonV2ItempocketnameStddevPopFieldsModel, PokemonV2ItempocketnameStddevPopFieldsModelType } from "./PokemonV2ItempocketnameStddevPopFieldsModel"
import { PokemonV2ItempocketnameStddevPopFieldsModelSelector } from "./PokemonV2ItempocketnameStddevPopFieldsModel.base"
import { PokemonV2ItempocketnameStddevSampFieldsModel, PokemonV2ItempocketnameStddevSampFieldsModelType } from "./PokemonV2ItempocketnameStddevSampFieldsModel"
import { PokemonV2ItempocketnameStddevSampFieldsModelSelector } from "./PokemonV2ItempocketnameStddevSampFieldsModel.base"
import { PokemonV2ItempocketnameSumFieldsModel, PokemonV2ItempocketnameSumFieldsModelType } from "./PokemonV2ItempocketnameSumFieldsModel"
import { PokemonV2ItempocketnameSumFieldsModelSelector } from "./PokemonV2ItempocketnameSumFieldsModel.base"
import { PokemonV2ItempocketnameVarPopFieldsModel, PokemonV2ItempocketnameVarPopFieldsModelType } from "./PokemonV2ItempocketnameVarPopFieldsModel"
import { PokemonV2ItempocketnameVarPopFieldsModelSelector } from "./PokemonV2ItempocketnameVarPopFieldsModel.base"
import { PokemonV2ItempocketnameVarSampFieldsModel, PokemonV2ItempocketnameVarSampFieldsModelType } from "./PokemonV2ItempocketnameVarSampFieldsModel"
import { PokemonV2ItempocketnameVarSampFieldsModelSelector } from "./PokemonV2ItempocketnameVarSampFieldsModel.base"
import { PokemonV2ItempocketnameVarianceFieldsModel, PokemonV2ItempocketnameVarianceFieldsModelType } from "./PokemonV2ItempocketnameVarianceFieldsModel"
import { PokemonV2ItempocketnameVarianceFieldsModelSelector } from "./PokemonV2ItempocketnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_aggregate_fields"), "pokemon_v2_itempocketname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItempocketnameAvgFieldsModelSelector | ((selector: PokemonV2ItempocketnameAvgFieldsModelSelector) => PokemonV2ItempocketnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItempocketnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItempocketnameMaxFieldsModelSelector | ((selector: PokemonV2ItempocketnameMaxFieldsModelSelector) => PokemonV2ItempocketnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItempocketnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItempocketnameMinFieldsModelSelector | ((selector: PokemonV2ItempocketnameMinFieldsModelSelector) => PokemonV2ItempocketnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItempocketnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItempocketnameStddevFieldsModelSelector | ((selector: PokemonV2ItempocketnameStddevFieldsModelSelector) => PokemonV2ItempocketnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItempocketnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItempocketnameStddevPopFieldsModelSelector | ((selector: PokemonV2ItempocketnameStddevPopFieldsModelSelector) => PokemonV2ItempocketnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItempocketnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItempocketnameStddevSampFieldsModelSelector | ((selector: PokemonV2ItempocketnameStddevSampFieldsModelSelector) => PokemonV2ItempocketnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItempocketnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItempocketnameSumFieldsModelSelector | ((selector: PokemonV2ItempocketnameSumFieldsModelSelector) => PokemonV2ItempocketnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItempocketnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItempocketnameVarPopFieldsModelSelector | ((selector: PokemonV2ItempocketnameVarPopFieldsModelSelector) => PokemonV2ItempocketnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItempocketnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItempocketnameVarSampFieldsModelSelector | ((selector: PokemonV2ItempocketnameVarSampFieldsModelSelector) => PokemonV2ItempocketnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItempocketnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItempocketnameVarianceFieldsModelSelector | ((selector: PokemonV2ItempocketnameVarianceFieldsModelSelector) => PokemonV2ItempocketnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItempocketnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItempocketnameAggregateFields() {
  return new PokemonV2ItempocketnameAggregateFieldsModelSelector()
}

export const pokemonV2ItempocketnameAggregateFieldsModelPrimitives = selectFromPokemonV2ItempocketnameAggregateFields().count
