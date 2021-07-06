/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EgggroupnameAvgFieldsModel, PokemonV2EgggroupnameAvgFieldsModelType } from "./PokemonV2EgggroupnameAvgFieldsModel"
import { PokemonV2EgggroupnameAvgFieldsModelSelector } from "./PokemonV2EgggroupnameAvgFieldsModel.base"
import { PokemonV2EgggroupnameMaxFieldsModel, PokemonV2EgggroupnameMaxFieldsModelType } from "./PokemonV2EgggroupnameMaxFieldsModel"
import { PokemonV2EgggroupnameMaxFieldsModelSelector } from "./PokemonV2EgggroupnameMaxFieldsModel.base"
import { PokemonV2EgggroupnameMinFieldsModel, PokemonV2EgggroupnameMinFieldsModelType } from "./PokemonV2EgggroupnameMinFieldsModel"
import { PokemonV2EgggroupnameMinFieldsModelSelector } from "./PokemonV2EgggroupnameMinFieldsModel.base"
import { PokemonV2EgggroupnameStddevFieldsModel, PokemonV2EgggroupnameStddevFieldsModelType } from "./PokemonV2EgggroupnameStddevFieldsModel"
import { PokemonV2EgggroupnameStddevFieldsModelSelector } from "./PokemonV2EgggroupnameStddevFieldsModel.base"
import { PokemonV2EgggroupnameStddevPopFieldsModel, PokemonV2EgggroupnameStddevPopFieldsModelType } from "./PokemonV2EgggroupnameStddevPopFieldsModel"
import { PokemonV2EgggroupnameStddevPopFieldsModelSelector } from "./PokemonV2EgggroupnameStddevPopFieldsModel.base"
import { PokemonV2EgggroupnameStddevSampFieldsModel, PokemonV2EgggroupnameStddevSampFieldsModelType } from "./PokemonV2EgggroupnameStddevSampFieldsModel"
import { PokemonV2EgggroupnameStddevSampFieldsModelSelector } from "./PokemonV2EgggroupnameStddevSampFieldsModel.base"
import { PokemonV2EgggroupnameSumFieldsModel, PokemonV2EgggroupnameSumFieldsModelType } from "./PokemonV2EgggroupnameSumFieldsModel"
import { PokemonV2EgggroupnameSumFieldsModelSelector } from "./PokemonV2EgggroupnameSumFieldsModel.base"
import { PokemonV2EgggroupnameVarPopFieldsModel, PokemonV2EgggroupnameVarPopFieldsModelType } from "./PokemonV2EgggroupnameVarPopFieldsModel"
import { PokemonV2EgggroupnameVarPopFieldsModelSelector } from "./PokemonV2EgggroupnameVarPopFieldsModel.base"
import { PokemonV2EgggroupnameVarSampFieldsModel, PokemonV2EgggroupnameVarSampFieldsModelType } from "./PokemonV2EgggroupnameVarSampFieldsModel"
import { PokemonV2EgggroupnameVarSampFieldsModelSelector } from "./PokemonV2EgggroupnameVarSampFieldsModel.base"
import { PokemonV2EgggroupnameVarianceFieldsModel, PokemonV2EgggroupnameVarianceFieldsModelType } from "./PokemonV2EgggroupnameVarianceFieldsModel"
import { PokemonV2EgggroupnameVarianceFieldsModelSelector } from "./PokemonV2EgggroupnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EgggroupnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2EgggroupnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EgggroupnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_egggroupname_aggregate_fields"), "pokemon_v2_egggroupname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EgggroupnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EgggroupnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EgggroupnameAvgFieldsModelSelector | ((selector: PokemonV2EgggroupnameAvgFieldsModelSelector) => PokemonV2EgggroupnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EgggroupnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EgggroupnameMaxFieldsModelSelector | ((selector: PokemonV2EgggroupnameMaxFieldsModelSelector) => PokemonV2EgggroupnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EgggroupnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EgggroupnameMinFieldsModelSelector | ((selector: PokemonV2EgggroupnameMinFieldsModelSelector) => PokemonV2EgggroupnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EgggroupnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EgggroupnameStddevFieldsModelSelector | ((selector: PokemonV2EgggroupnameStddevFieldsModelSelector) => PokemonV2EgggroupnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EgggroupnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EgggroupnameStddevPopFieldsModelSelector | ((selector: PokemonV2EgggroupnameStddevPopFieldsModelSelector) => PokemonV2EgggroupnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EgggroupnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EgggroupnameStddevSampFieldsModelSelector | ((selector: PokemonV2EgggroupnameStddevSampFieldsModelSelector) => PokemonV2EgggroupnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EgggroupnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EgggroupnameSumFieldsModelSelector | ((selector: PokemonV2EgggroupnameSumFieldsModelSelector) => PokemonV2EgggroupnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EgggroupnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EgggroupnameVarPopFieldsModelSelector | ((selector: PokemonV2EgggroupnameVarPopFieldsModelSelector) => PokemonV2EgggroupnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EgggroupnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EgggroupnameVarSampFieldsModelSelector | ((selector: PokemonV2EgggroupnameVarSampFieldsModelSelector) => PokemonV2EgggroupnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EgggroupnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EgggroupnameVarianceFieldsModelSelector | ((selector: PokemonV2EgggroupnameVarianceFieldsModelSelector) => PokemonV2EgggroupnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EgggroupnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EgggroupnameAggregateFields() {
  return new PokemonV2EgggroupnameAggregateFieldsModelSelector()
}

export const pokemonV2EgggroupnameAggregateFieldsModelPrimitives = selectFromPokemonV2EgggroupnameAggregateFields().count
