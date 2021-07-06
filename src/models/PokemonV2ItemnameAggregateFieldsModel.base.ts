/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemnameAvgFieldsModel, PokemonV2ItemnameAvgFieldsModelType } from "./PokemonV2ItemnameAvgFieldsModel"
import { PokemonV2ItemnameAvgFieldsModelSelector } from "./PokemonV2ItemnameAvgFieldsModel.base"
import { PokemonV2ItemnameMaxFieldsModel, PokemonV2ItemnameMaxFieldsModelType } from "./PokemonV2ItemnameMaxFieldsModel"
import { PokemonV2ItemnameMaxFieldsModelSelector } from "./PokemonV2ItemnameMaxFieldsModel.base"
import { PokemonV2ItemnameMinFieldsModel, PokemonV2ItemnameMinFieldsModelType } from "./PokemonV2ItemnameMinFieldsModel"
import { PokemonV2ItemnameMinFieldsModelSelector } from "./PokemonV2ItemnameMinFieldsModel.base"
import { PokemonV2ItemnameStddevFieldsModel, PokemonV2ItemnameStddevFieldsModelType } from "./PokemonV2ItemnameStddevFieldsModel"
import { PokemonV2ItemnameStddevFieldsModelSelector } from "./PokemonV2ItemnameStddevFieldsModel.base"
import { PokemonV2ItemnameStddevPopFieldsModel, PokemonV2ItemnameStddevPopFieldsModelType } from "./PokemonV2ItemnameStddevPopFieldsModel"
import { PokemonV2ItemnameStddevPopFieldsModelSelector } from "./PokemonV2ItemnameStddevPopFieldsModel.base"
import { PokemonV2ItemnameStddevSampFieldsModel, PokemonV2ItemnameStddevSampFieldsModelType } from "./PokemonV2ItemnameStddevSampFieldsModel"
import { PokemonV2ItemnameStddevSampFieldsModelSelector } from "./PokemonV2ItemnameStddevSampFieldsModel.base"
import { PokemonV2ItemnameSumFieldsModel, PokemonV2ItemnameSumFieldsModelType } from "./PokemonV2ItemnameSumFieldsModel"
import { PokemonV2ItemnameSumFieldsModelSelector } from "./PokemonV2ItemnameSumFieldsModel.base"
import { PokemonV2ItemnameVarPopFieldsModel, PokemonV2ItemnameVarPopFieldsModelType } from "./PokemonV2ItemnameVarPopFieldsModel"
import { PokemonV2ItemnameVarPopFieldsModelSelector } from "./PokemonV2ItemnameVarPopFieldsModel.base"
import { PokemonV2ItemnameVarSampFieldsModel, PokemonV2ItemnameVarSampFieldsModelType } from "./PokemonV2ItemnameVarSampFieldsModel"
import { PokemonV2ItemnameVarSampFieldsModelSelector } from "./PokemonV2ItemnameVarSampFieldsModel.base"
import { PokemonV2ItemnameVarianceFieldsModel, PokemonV2ItemnameVarianceFieldsModelType } from "./PokemonV2ItemnameVarianceFieldsModel"
import { PokemonV2ItemnameVarianceFieldsModelSelector } from "./PokemonV2ItemnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemname"
 */
export const PokemonV2ItemnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_aggregate_fields"), "pokemon_v2_itemname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemnameAvgFieldsModelSelector | ((selector: PokemonV2ItemnameAvgFieldsModelSelector) => PokemonV2ItemnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemnameMaxFieldsModelSelector | ((selector: PokemonV2ItemnameMaxFieldsModelSelector) => PokemonV2ItemnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemnameMinFieldsModelSelector | ((selector: PokemonV2ItemnameMinFieldsModelSelector) => PokemonV2ItemnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemnameStddevFieldsModelSelector | ((selector: PokemonV2ItemnameStddevFieldsModelSelector) => PokemonV2ItemnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemnameStddevPopFieldsModelSelector | ((selector: PokemonV2ItemnameStddevPopFieldsModelSelector) => PokemonV2ItemnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemnameStddevSampFieldsModelSelector | ((selector: PokemonV2ItemnameStddevSampFieldsModelSelector) => PokemonV2ItemnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemnameSumFieldsModelSelector | ((selector: PokemonV2ItemnameSumFieldsModelSelector) => PokemonV2ItemnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemnameVarPopFieldsModelSelector | ((selector: PokemonV2ItemnameVarPopFieldsModelSelector) => PokemonV2ItemnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemnameVarSampFieldsModelSelector | ((selector: PokemonV2ItemnameVarSampFieldsModelSelector) => PokemonV2ItemnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemnameVarianceFieldsModelSelector | ((selector: PokemonV2ItemnameVarianceFieldsModelSelector) => PokemonV2ItemnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemnameAggregateFields() {
  return new PokemonV2ItemnameAggregateFieldsModelSelector()
}

export const pokemonV2ItemnameAggregateFieldsModelPrimitives = selectFromPokemonV2ItemnameAggregateFields().count
