/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonhabitatAvgFieldsModel, PokemonV2PokemonhabitatAvgFieldsModelType } from "./PokemonV2PokemonhabitatAvgFieldsModel"
import { PokemonV2PokemonhabitatAvgFieldsModelSelector } from "./PokemonV2PokemonhabitatAvgFieldsModel.base"
import { PokemonV2PokemonhabitatMaxFieldsModel, PokemonV2PokemonhabitatMaxFieldsModelType } from "./PokemonV2PokemonhabitatMaxFieldsModel"
import { PokemonV2PokemonhabitatMaxFieldsModelSelector } from "./PokemonV2PokemonhabitatMaxFieldsModel.base"
import { PokemonV2PokemonhabitatMinFieldsModel, PokemonV2PokemonhabitatMinFieldsModelType } from "./PokemonV2PokemonhabitatMinFieldsModel"
import { PokemonV2PokemonhabitatMinFieldsModelSelector } from "./PokemonV2PokemonhabitatMinFieldsModel.base"
import { PokemonV2PokemonhabitatStddevFieldsModel, PokemonV2PokemonhabitatStddevFieldsModelType } from "./PokemonV2PokemonhabitatStddevFieldsModel"
import { PokemonV2PokemonhabitatStddevFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevFieldsModel.base"
import { PokemonV2PokemonhabitatStddevPopFieldsModel, PokemonV2PokemonhabitatStddevPopFieldsModelType } from "./PokemonV2PokemonhabitatStddevPopFieldsModel"
import { PokemonV2PokemonhabitatStddevPopFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevPopFieldsModel.base"
import { PokemonV2PokemonhabitatStddevSampFieldsModel, PokemonV2PokemonhabitatStddevSampFieldsModelType } from "./PokemonV2PokemonhabitatStddevSampFieldsModel"
import { PokemonV2PokemonhabitatStddevSampFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevSampFieldsModel.base"
import { PokemonV2PokemonhabitatSumFieldsModel, PokemonV2PokemonhabitatSumFieldsModelType } from "./PokemonV2PokemonhabitatSumFieldsModel"
import { PokemonV2PokemonhabitatSumFieldsModelSelector } from "./PokemonV2PokemonhabitatSumFieldsModel.base"
import { PokemonV2PokemonhabitatVarPopFieldsModel, PokemonV2PokemonhabitatVarPopFieldsModelType } from "./PokemonV2PokemonhabitatVarPopFieldsModel"
import { PokemonV2PokemonhabitatVarPopFieldsModelSelector } from "./PokemonV2PokemonhabitatVarPopFieldsModel.base"
import { PokemonV2PokemonhabitatVarSampFieldsModel, PokemonV2PokemonhabitatVarSampFieldsModelType } from "./PokemonV2PokemonhabitatVarSampFieldsModel"
import { PokemonV2PokemonhabitatVarSampFieldsModelSelector } from "./PokemonV2PokemonhabitatVarSampFieldsModel.base"
import { PokemonV2PokemonhabitatVarianceFieldsModel, PokemonV2PokemonhabitatVarianceFieldsModelType } from "./PokemonV2PokemonhabitatVarianceFieldsModel"
import { PokemonV2PokemonhabitatVarianceFieldsModelSelector } from "./PokemonV2PokemonhabitatVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_aggregate_fields"), "pokemon_v2_pokemonhabitat_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonhabitatAvgFieldsModelSelector | ((selector: PokemonV2PokemonhabitatAvgFieldsModelSelector) => PokemonV2PokemonhabitatAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonhabitatAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonhabitatMaxFieldsModelSelector | ((selector: PokemonV2PokemonhabitatMaxFieldsModelSelector) => PokemonV2PokemonhabitatMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonhabitatMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonhabitatMinFieldsModelSelector | ((selector: PokemonV2PokemonhabitatMinFieldsModelSelector) => PokemonV2PokemonhabitatMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonhabitatMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonhabitatStddevFieldsModelSelector | ((selector: PokemonV2PokemonhabitatStddevFieldsModelSelector) => PokemonV2PokemonhabitatStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonhabitatStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonhabitatStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonhabitatStddevPopFieldsModelSelector) => PokemonV2PokemonhabitatStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonhabitatStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonhabitatStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonhabitatStddevSampFieldsModelSelector) => PokemonV2PokemonhabitatStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonhabitatStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonhabitatSumFieldsModelSelector | ((selector: PokemonV2PokemonhabitatSumFieldsModelSelector) => PokemonV2PokemonhabitatSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonhabitatSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonhabitatVarPopFieldsModelSelector | ((selector: PokemonV2PokemonhabitatVarPopFieldsModelSelector) => PokemonV2PokemonhabitatVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonhabitatVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonhabitatVarSampFieldsModelSelector | ((selector: PokemonV2PokemonhabitatVarSampFieldsModelSelector) => PokemonV2PokemonhabitatVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonhabitatVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonhabitatVarianceFieldsModelSelector | ((selector: PokemonV2PokemonhabitatVarianceFieldsModelSelector) => PokemonV2PokemonhabitatVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonhabitatVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonhabitatAggregateFields() {
  return new PokemonV2PokemonhabitatAggregateFieldsModelSelector()
}

export const pokemonV2PokemonhabitatAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatAggregateFields().count
