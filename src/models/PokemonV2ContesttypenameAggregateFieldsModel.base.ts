/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesttypenameAvgFieldsModel, PokemonV2ContesttypenameAvgFieldsModelType } from "./PokemonV2ContesttypenameAvgFieldsModel"
import { PokemonV2ContesttypenameAvgFieldsModelSelector } from "./PokemonV2ContesttypenameAvgFieldsModel.base"
import { PokemonV2ContesttypenameMaxFieldsModel, PokemonV2ContesttypenameMaxFieldsModelType } from "./PokemonV2ContesttypenameMaxFieldsModel"
import { PokemonV2ContesttypenameMaxFieldsModelSelector } from "./PokemonV2ContesttypenameMaxFieldsModel.base"
import { PokemonV2ContesttypenameMinFieldsModel, PokemonV2ContesttypenameMinFieldsModelType } from "./PokemonV2ContesttypenameMinFieldsModel"
import { PokemonV2ContesttypenameMinFieldsModelSelector } from "./PokemonV2ContesttypenameMinFieldsModel.base"
import { PokemonV2ContesttypenameStddevFieldsModel, PokemonV2ContesttypenameStddevFieldsModelType } from "./PokemonV2ContesttypenameStddevFieldsModel"
import { PokemonV2ContesttypenameStddevFieldsModelSelector } from "./PokemonV2ContesttypenameStddevFieldsModel.base"
import { PokemonV2ContesttypenameStddevPopFieldsModel, PokemonV2ContesttypenameStddevPopFieldsModelType } from "./PokemonV2ContesttypenameStddevPopFieldsModel"
import { PokemonV2ContesttypenameStddevPopFieldsModelSelector } from "./PokemonV2ContesttypenameStddevPopFieldsModel.base"
import { PokemonV2ContesttypenameStddevSampFieldsModel, PokemonV2ContesttypenameStddevSampFieldsModelType } from "./PokemonV2ContesttypenameStddevSampFieldsModel"
import { PokemonV2ContesttypenameStddevSampFieldsModelSelector } from "./PokemonV2ContesttypenameStddevSampFieldsModel.base"
import { PokemonV2ContesttypenameSumFieldsModel, PokemonV2ContesttypenameSumFieldsModelType } from "./PokemonV2ContesttypenameSumFieldsModel"
import { PokemonV2ContesttypenameSumFieldsModelSelector } from "./PokemonV2ContesttypenameSumFieldsModel.base"
import { PokemonV2ContesttypenameVarPopFieldsModel, PokemonV2ContesttypenameVarPopFieldsModelType } from "./PokemonV2ContesttypenameVarPopFieldsModel"
import { PokemonV2ContesttypenameVarPopFieldsModelSelector } from "./PokemonV2ContesttypenameVarPopFieldsModel.base"
import { PokemonV2ContesttypenameVarSampFieldsModel, PokemonV2ContesttypenameVarSampFieldsModelType } from "./PokemonV2ContesttypenameVarSampFieldsModel"
import { PokemonV2ContesttypenameVarSampFieldsModelSelector } from "./PokemonV2ContesttypenameVarSampFieldsModel.base"
import { PokemonV2ContesttypenameVarianceFieldsModel, PokemonV2ContesttypenameVarianceFieldsModelType } from "./PokemonV2ContesttypenameVarianceFieldsModel"
import { PokemonV2ContesttypenameVarianceFieldsModelSelector } from "./PokemonV2ContesttypenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_aggregate_fields"), "pokemon_v2_contesttypename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContesttypenameAvgFieldsModelSelector | ((selector: PokemonV2ContesttypenameAvgFieldsModelSelector) => PokemonV2ContesttypenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContesttypenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContesttypenameMaxFieldsModelSelector | ((selector: PokemonV2ContesttypenameMaxFieldsModelSelector) => PokemonV2ContesttypenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContesttypenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContesttypenameMinFieldsModelSelector | ((selector: PokemonV2ContesttypenameMinFieldsModelSelector) => PokemonV2ContesttypenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContesttypenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContesttypenameStddevFieldsModelSelector | ((selector: PokemonV2ContesttypenameStddevFieldsModelSelector) => PokemonV2ContesttypenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContesttypenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContesttypenameStddevPopFieldsModelSelector | ((selector: PokemonV2ContesttypenameStddevPopFieldsModelSelector) => PokemonV2ContesttypenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContesttypenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContesttypenameStddevSampFieldsModelSelector | ((selector: PokemonV2ContesttypenameStddevSampFieldsModelSelector) => PokemonV2ContesttypenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContesttypenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContesttypenameSumFieldsModelSelector | ((selector: PokemonV2ContesttypenameSumFieldsModelSelector) => PokemonV2ContesttypenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContesttypenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContesttypenameVarPopFieldsModelSelector | ((selector: PokemonV2ContesttypenameVarPopFieldsModelSelector) => PokemonV2ContesttypenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContesttypenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContesttypenameVarSampFieldsModelSelector | ((selector: PokemonV2ContesttypenameVarSampFieldsModelSelector) => PokemonV2ContesttypenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContesttypenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContesttypenameVarianceFieldsModelSelector | ((selector: PokemonV2ContesttypenameVarianceFieldsModelSelector) => PokemonV2ContesttypenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContesttypenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContesttypenameAggregateFields() {
  return new PokemonV2ContesttypenameAggregateFieldsModelSelector()
}

export const pokemonV2ContesttypenameAggregateFieldsModelPrimitives = selectFromPokemonV2ContesttypenameAggregateFields().count
