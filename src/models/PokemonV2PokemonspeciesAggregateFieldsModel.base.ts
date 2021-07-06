/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesAvgFieldsModel, PokemonV2PokemonspeciesAvgFieldsModelType } from "./PokemonV2PokemonspeciesAvgFieldsModel"
import { PokemonV2PokemonspeciesAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesAvgFieldsModel.base"
import { PokemonV2PokemonspeciesMaxFieldsModel, PokemonV2PokemonspeciesMaxFieldsModelType } from "./PokemonV2PokemonspeciesMaxFieldsModel"
import { PokemonV2PokemonspeciesMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesMaxFieldsModel.base"
import { PokemonV2PokemonspeciesMinFieldsModel, PokemonV2PokemonspeciesMinFieldsModelType } from "./PokemonV2PokemonspeciesMinFieldsModel"
import { PokemonV2PokemonspeciesMinFieldsModelSelector } from "./PokemonV2PokemonspeciesMinFieldsModel.base"
import { PokemonV2PokemonspeciesStddevFieldsModel, PokemonV2PokemonspeciesStddevFieldsModelType } from "./PokemonV2PokemonspeciesStddevFieldsModel"
import { PokemonV2PokemonspeciesStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevFieldsModel.base"
import { PokemonV2PokemonspeciesStddevPopFieldsModel, PokemonV2PokemonspeciesStddevPopFieldsModelType } from "./PokemonV2PokemonspeciesStddevPopFieldsModel"
import { PokemonV2PokemonspeciesStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevPopFieldsModel.base"
import { PokemonV2PokemonspeciesStddevSampFieldsModel, PokemonV2PokemonspeciesStddevSampFieldsModelType } from "./PokemonV2PokemonspeciesStddevSampFieldsModel"
import { PokemonV2PokemonspeciesStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesStddevSampFieldsModel.base"
import { PokemonV2PokemonspeciesSumFieldsModel, PokemonV2PokemonspeciesSumFieldsModelType } from "./PokemonV2PokemonspeciesSumFieldsModel"
import { PokemonV2PokemonspeciesSumFieldsModelSelector } from "./PokemonV2PokemonspeciesSumFieldsModel.base"
import { PokemonV2PokemonspeciesVarPopFieldsModel, PokemonV2PokemonspeciesVarPopFieldsModelType } from "./PokemonV2PokemonspeciesVarPopFieldsModel"
import { PokemonV2PokemonspeciesVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesVarPopFieldsModel.base"
import { PokemonV2PokemonspeciesVarSampFieldsModel, PokemonV2PokemonspeciesVarSampFieldsModelType } from "./PokemonV2PokemonspeciesVarSampFieldsModel"
import { PokemonV2PokemonspeciesVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesVarSampFieldsModel.base"
import { PokemonV2PokemonspeciesVarianceFieldsModel, PokemonV2PokemonspeciesVarianceFieldsModelType } from "./PokemonV2PokemonspeciesVarianceFieldsModel"
import { PokemonV2PokemonspeciesVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspecies_aggregate_fields"), "pokemon_v2_pokemonspecies_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonspeciesAvgFieldsModelSelector | ((selector: PokemonV2PokemonspeciesAvgFieldsModelSelector) => PokemonV2PokemonspeciesAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonspeciesAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonspeciesMaxFieldsModelSelector | ((selector: PokemonV2PokemonspeciesMaxFieldsModelSelector) => PokemonV2PokemonspeciesMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonspeciesMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonspeciesMinFieldsModelSelector | ((selector: PokemonV2PokemonspeciesMinFieldsModelSelector) => PokemonV2PokemonspeciesMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonspeciesMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonspeciesStddevFieldsModelSelector | ((selector: PokemonV2PokemonspeciesStddevFieldsModelSelector) => PokemonV2PokemonspeciesStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonspeciesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonspeciesStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesStddevPopFieldsModelSelector) => PokemonV2PokemonspeciesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonspeciesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonspeciesStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesStddevSampFieldsModelSelector) => PokemonV2PokemonspeciesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonspeciesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonspeciesSumFieldsModelSelector | ((selector: PokemonV2PokemonspeciesSumFieldsModelSelector) => PokemonV2PokemonspeciesSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonspeciesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonspeciesVarPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesVarPopFieldsModelSelector) => PokemonV2PokemonspeciesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonspeciesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonspeciesVarSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesVarSampFieldsModelSelector) => PokemonV2PokemonspeciesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonspeciesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonspeciesVarianceFieldsModelSelector | ((selector: PokemonV2PokemonspeciesVarianceFieldsModelSelector) => PokemonV2PokemonspeciesVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonspeciesVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesAggregateFields() {
  return new PokemonV2PokemonspeciesAggregateFieldsModelSelector()
}

export const pokemonV2PokemonspeciesAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesAggregateFields().count
