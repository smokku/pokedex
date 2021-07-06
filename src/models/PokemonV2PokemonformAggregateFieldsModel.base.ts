/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformAvgFieldsModel, PokemonV2PokemonformAvgFieldsModelType } from "./PokemonV2PokemonformAvgFieldsModel"
import { PokemonV2PokemonformAvgFieldsModelSelector } from "./PokemonV2PokemonformAvgFieldsModel.base"
import { PokemonV2PokemonformMaxFieldsModel, PokemonV2PokemonformMaxFieldsModelType } from "./PokemonV2PokemonformMaxFieldsModel"
import { PokemonV2PokemonformMaxFieldsModelSelector } from "./PokemonV2PokemonformMaxFieldsModel.base"
import { PokemonV2PokemonformMinFieldsModel, PokemonV2PokemonformMinFieldsModelType } from "./PokemonV2PokemonformMinFieldsModel"
import { PokemonV2PokemonformMinFieldsModelSelector } from "./PokemonV2PokemonformMinFieldsModel.base"
import { PokemonV2PokemonformStddevFieldsModel, PokemonV2PokemonformStddevFieldsModelType } from "./PokemonV2PokemonformStddevFieldsModel"
import { PokemonV2PokemonformStddevFieldsModelSelector } from "./PokemonV2PokemonformStddevFieldsModel.base"
import { PokemonV2PokemonformStddevPopFieldsModel, PokemonV2PokemonformStddevPopFieldsModelType } from "./PokemonV2PokemonformStddevPopFieldsModel"
import { PokemonV2PokemonformStddevPopFieldsModelSelector } from "./PokemonV2PokemonformStddevPopFieldsModel.base"
import { PokemonV2PokemonformStddevSampFieldsModel, PokemonV2PokemonformStddevSampFieldsModelType } from "./PokemonV2PokemonformStddevSampFieldsModel"
import { PokemonV2PokemonformStddevSampFieldsModelSelector } from "./PokemonV2PokemonformStddevSampFieldsModel.base"
import { PokemonV2PokemonformSumFieldsModel, PokemonV2PokemonformSumFieldsModelType } from "./PokemonV2PokemonformSumFieldsModel"
import { PokemonV2PokemonformSumFieldsModelSelector } from "./PokemonV2PokemonformSumFieldsModel.base"
import { PokemonV2PokemonformVarPopFieldsModel, PokemonV2PokemonformVarPopFieldsModelType } from "./PokemonV2PokemonformVarPopFieldsModel"
import { PokemonV2PokemonformVarPopFieldsModelSelector } from "./PokemonV2PokemonformVarPopFieldsModel.base"
import { PokemonV2PokemonformVarSampFieldsModel, PokemonV2PokemonformVarSampFieldsModelType } from "./PokemonV2PokemonformVarSampFieldsModel"
import { PokemonV2PokemonformVarSampFieldsModelSelector } from "./PokemonV2PokemonformVarSampFieldsModel.base"
import { PokemonV2PokemonformVarianceFieldsModel, PokemonV2PokemonformVarianceFieldsModelType } from "./PokemonV2PokemonformVarianceFieldsModel"
import { PokemonV2PokemonformVarianceFieldsModelSelector } from "./PokemonV2PokemonformVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonformAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_aggregate_fields"), "pokemon_v2_pokemonform_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonformAvgFieldsModelSelector | ((selector: PokemonV2PokemonformAvgFieldsModelSelector) => PokemonV2PokemonformAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonformAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonformMaxFieldsModelSelector | ((selector: PokemonV2PokemonformMaxFieldsModelSelector) => PokemonV2PokemonformMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonformMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonformMinFieldsModelSelector | ((selector: PokemonV2PokemonformMinFieldsModelSelector) => PokemonV2PokemonformMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonformMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonformStddevFieldsModelSelector | ((selector: PokemonV2PokemonformStddevFieldsModelSelector) => PokemonV2PokemonformStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonformStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonformStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonformStddevPopFieldsModelSelector) => PokemonV2PokemonformStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonformStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonformStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonformStddevSampFieldsModelSelector) => PokemonV2PokemonformStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonformStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonformSumFieldsModelSelector | ((selector: PokemonV2PokemonformSumFieldsModelSelector) => PokemonV2PokemonformSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonformSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonformVarPopFieldsModelSelector | ((selector: PokemonV2PokemonformVarPopFieldsModelSelector) => PokemonV2PokemonformVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonformVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonformVarSampFieldsModelSelector | ((selector: PokemonV2PokemonformVarSampFieldsModelSelector) => PokemonV2PokemonformVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonformVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonformVarianceFieldsModelSelector | ((selector: PokemonV2PokemonformVarianceFieldsModelSelector) => PokemonV2PokemonformVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonformVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformAggregateFields() {
  return new PokemonV2PokemonformAggregateFieldsModelSelector()
}

export const pokemonV2PokemonformAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonformAggregateFields().count
