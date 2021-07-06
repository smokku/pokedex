/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitynameAvgFieldsModel, PokemonV2AbilitynameAvgFieldsModelType } from "./PokemonV2AbilitynameAvgFieldsModel"
import { PokemonV2AbilitynameAvgFieldsModelSelector } from "./PokemonV2AbilitynameAvgFieldsModel.base"
import { PokemonV2AbilitynameMaxFieldsModel, PokemonV2AbilitynameMaxFieldsModelType } from "./PokemonV2AbilitynameMaxFieldsModel"
import { PokemonV2AbilitynameMaxFieldsModelSelector } from "./PokemonV2AbilitynameMaxFieldsModel.base"
import { PokemonV2AbilitynameMinFieldsModel, PokemonV2AbilitynameMinFieldsModelType } from "./PokemonV2AbilitynameMinFieldsModel"
import { PokemonV2AbilitynameMinFieldsModelSelector } from "./PokemonV2AbilitynameMinFieldsModel.base"
import { PokemonV2AbilitynameStddevFieldsModel, PokemonV2AbilitynameStddevFieldsModelType } from "./PokemonV2AbilitynameStddevFieldsModel"
import { PokemonV2AbilitynameStddevFieldsModelSelector } from "./PokemonV2AbilitynameStddevFieldsModel.base"
import { PokemonV2AbilitynameStddevPopFieldsModel, PokemonV2AbilitynameStddevPopFieldsModelType } from "./PokemonV2AbilitynameStddevPopFieldsModel"
import { PokemonV2AbilitynameStddevPopFieldsModelSelector } from "./PokemonV2AbilitynameStddevPopFieldsModel.base"
import { PokemonV2AbilitynameStddevSampFieldsModel, PokemonV2AbilitynameStddevSampFieldsModelType } from "./PokemonV2AbilitynameStddevSampFieldsModel"
import { PokemonV2AbilitynameStddevSampFieldsModelSelector } from "./PokemonV2AbilitynameStddevSampFieldsModel.base"
import { PokemonV2AbilitynameSumFieldsModel, PokemonV2AbilitynameSumFieldsModelType } from "./PokemonV2AbilitynameSumFieldsModel"
import { PokemonV2AbilitynameSumFieldsModelSelector } from "./PokemonV2AbilitynameSumFieldsModel.base"
import { PokemonV2AbilitynameVarPopFieldsModel, PokemonV2AbilitynameVarPopFieldsModelType } from "./PokemonV2AbilitynameVarPopFieldsModel"
import { PokemonV2AbilitynameVarPopFieldsModelSelector } from "./PokemonV2AbilitynameVarPopFieldsModel.base"
import { PokemonV2AbilitynameVarSampFieldsModel, PokemonV2AbilitynameVarSampFieldsModelType } from "./PokemonV2AbilitynameVarSampFieldsModel"
import { PokemonV2AbilitynameVarSampFieldsModelSelector } from "./PokemonV2AbilitynameVarSampFieldsModel.base"
import { PokemonV2AbilitynameVarianceFieldsModel, PokemonV2AbilitynameVarianceFieldsModelType } from "./PokemonV2AbilitynameVarianceFieldsModel"
import { PokemonV2AbilitynameVarianceFieldsModelSelector } from "./PokemonV2AbilitynameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilitynameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilitynameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_aggregate_fields"), "pokemon_v2_abilityname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitynameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilitynameAvgFieldsModelSelector | ((selector: PokemonV2AbilitynameAvgFieldsModelSelector) => PokemonV2AbilitynameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilitynameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilitynameMaxFieldsModelSelector | ((selector: PokemonV2AbilitynameMaxFieldsModelSelector) => PokemonV2AbilitynameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilitynameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilitynameMinFieldsModelSelector | ((selector: PokemonV2AbilitynameMinFieldsModelSelector) => PokemonV2AbilitynameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilitynameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilitynameStddevFieldsModelSelector | ((selector: PokemonV2AbilitynameStddevFieldsModelSelector) => PokemonV2AbilitynameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilitynameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilitynameStddevPopFieldsModelSelector | ((selector: PokemonV2AbilitynameStddevPopFieldsModelSelector) => PokemonV2AbilitynameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilitynameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilitynameStddevSampFieldsModelSelector | ((selector: PokemonV2AbilitynameStddevSampFieldsModelSelector) => PokemonV2AbilitynameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilitynameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilitynameSumFieldsModelSelector | ((selector: PokemonV2AbilitynameSumFieldsModelSelector) => PokemonV2AbilitynameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilitynameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilitynameVarPopFieldsModelSelector | ((selector: PokemonV2AbilitynameVarPopFieldsModelSelector) => PokemonV2AbilitynameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilitynameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilitynameVarSampFieldsModelSelector | ((selector: PokemonV2AbilitynameVarSampFieldsModelSelector) => PokemonV2AbilitynameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilitynameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilitynameVarianceFieldsModelSelector | ((selector: PokemonV2AbilitynameVarianceFieldsModelSelector) => PokemonV2AbilitynameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilitynameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilitynameAggregateFields() {
  return new PokemonV2AbilitynameAggregateFieldsModelSelector()
}

export const pokemonV2AbilitynameAggregateFieldsModelPrimitives = selectFromPokemonV2AbilitynameAggregateFields().count
