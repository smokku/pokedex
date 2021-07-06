/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonhabitatnameAvgFieldsModel, PokemonV2PokemonhabitatnameAvgFieldsModelType } from "./PokemonV2PokemonhabitatnameAvgFieldsModel"
import { PokemonV2PokemonhabitatnameAvgFieldsModelSelector } from "./PokemonV2PokemonhabitatnameAvgFieldsModel.base"
import { PokemonV2PokemonhabitatnameMaxFieldsModel, PokemonV2PokemonhabitatnameMaxFieldsModelType } from "./PokemonV2PokemonhabitatnameMaxFieldsModel"
import { PokemonV2PokemonhabitatnameMaxFieldsModelSelector } from "./PokemonV2PokemonhabitatnameMaxFieldsModel.base"
import { PokemonV2PokemonhabitatnameMinFieldsModel, PokemonV2PokemonhabitatnameMinFieldsModelType } from "./PokemonV2PokemonhabitatnameMinFieldsModel"
import { PokemonV2PokemonhabitatnameMinFieldsModelSelector } from "./PokemonV2PokemonhabitatnameMinFieldsModel.base"
import { PokemonV2PokemonhabitatnameStddevFieldsModel, PokemonV2PokemonhabitatnameStddevFieldsModelType } from "./PokemonV2PokemonhabitatnameStddevFieldsModel"
import { PokemonV2PokemonhabitatnameStddevFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevFieldsModel.base"
import { PokemonV2PokemonhabitatnameStddevPopFieldsModel, PokemonV2PokemonhabitatnameStddevPopFieldsModelType } from "./PokemonV2PokemonhabitatnameStddevPopFieldsModel"
import { PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevPopFieldsModel.base"
import { PokemonV2PokemonhabitatnameStddevSampFieldsModel, PokemonV2PokemonhabitatnameStddevSampFieldsModelType } from "./PokemonV2PokemonhabitatnameStddevSampFieldsModel"
import { PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevSampFieldsModel.base"
import { PokemonV2PokemonhabitatnameSumFieldsModel, PokemonV2PokemonhabitatnameSumFieldsModelType } from "./PokemonV2PokemonhabitatnameSumFieldsModel"
import { PokemonV2PokemonhabitatnameSumFieldsModelSelector } from "./PokemonV2PokemonhabitatnameSumFieldsModel.base"
import { PokemonV2PokemonhabitatnameVarPopFieldsModel, PokemonV2PokemonhabitatnameVarPopFieldsModelType } from "./PokemonV2PokemonhabitatnameVarPopFieldsModel"
import { PokemonV2PokemonhabitatnameVarPopFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarPopFieldsModel.base"
import { PokemonV2PokemonhabitatnameVarSampFieldsModel, PokemonV2PokemonhabitatnameVarSampFieldsModelType } from "./PokemonV2PokemonhabitatnameVarSampFieldsModel"
import { PokemonV2PokemonhabitatnameVarSampFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarSampFieldsModel.base"
import { PokemonV2PokemonhabitatnameVarianceFieldsModel, PokemonV2PokemonhabitatnameVarianceFieldsModelType } from "./PokemonV2PokemonhabitatnameVarianceFieldsModel"
import { PokemonV2PokemonhabitatnameVarianceFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonhabitatname"
 */
export const PokemonV2PokemonhabitatnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_aggregate_fields"), "pokemon_v2_pokemonhabitatname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonhabitatnameAvgFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameAvgFieldsModelSelector) => PokemonV2PokemonhabitatnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonhabitatnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonhabitatnameMaxFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameMaxFieldsModelSelector) => PokemonV2PokemonhabitatnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonhabitatnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonhabitatnameMinFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameMinFieldsModelSelector) => PokemonV2PokemonhabitatnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonhabitatnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonhabitatnameStddevFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameStddevFieldsModelSelector) => PokemonV2PokemonhabitatnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonhabitatnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector) => PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector) => PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonhabitatnameSumFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameSumFieldsModelSelector) => PokemonV2PokemonhabitatnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonhabitatnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonhabitatnameVarPopFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameVarPopFieldsModelSelector) => PokemonV2PokemonhabitatnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonhabitatnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonhabitatnameVarSampFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameVarSampFieldsModelSelector) => PokemonV2PokemonhabitatnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonhabitatnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonhabitatnameVarianceFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameVarianceFieldsModelSelector) => PokemonV2PokemonhabitatnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonhabitatnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonhabitatnameAggregateFields() {
  return new PokemonV2PokemonhabitatnameAggregateFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameAggregateFields().count
