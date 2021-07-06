/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassAvgFieldsModel, PokemonV2MovedamageclassAvgFieldsModelType } from "./PokemonV2MovedamageclassAvgFieldsModel"
import { PokemonV2MovedamageclassAvgFieldsModelSelector } from "./PokemonV2MovedamageclassAvgFieldsModel.base"
import { PokemonV2MovedamageclassMaxFieldsModel, PokemonV2MovedamageclassMaxFieldsModelType } from "./PokemonV2MovedamageclassMaxFieldsModel"
import { PokemonV2MovedamageclassMaxFieldsModelSelector } from "./PokemonV2MovedamageclassMaxFieldsModel.base"
import { PokemonV2MovedamageclassMinFieldsModel, PokemonV2MovedamageclassMinFieldsModelType } from "./PokemonV2MovedamageclassMinFieldsModel"
import { PokemonV2MovedamageclassMinFieldsModelSelector } from "./PokemonV2MovedamageclassMinFieldsModel.base"
import { PokemonV2MovedamageclassStddevFieldsModel, PokemonV2MovedamageclassStddevFieldsModelType } from "./PokemonV2MovedamageclassStddevFieldsModel"
import { PokemonV2MovedamageclassStddevFieldsModelSelector } from "./PokemonV2MovedamageclassStddevFieldsModel.base"
import { PokemonV2MovedamageclassStddevPopFieldsModel, PokemonV2MovedamageclassStddevPopFieldsModelType } from "./PokemonV2MovedamageclassStddevPopFieldsModel"
import { PokemonV2MovedamageclassStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassStddevPopFieldsModel.base"
import { PokemonV2MovedamageclassStddevSampFieldsModel, PokemonV2MovedamageclassStddevSampFieldsModelType } from "./PokemonV2MovedamageclassStddevSampFieldsModel"
import { PokemonV2MovedamageclassStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassStddevSampFieldsModel.base"
import { PokemonV2MovedamageclassSumFieldsModel, PokemonV2MovedamageclassSumFieldsModelType } from "./PokemonV2MovedamageclassSumFieldsModel"
import { PokemonV2MovedamageclassSumFieldsModelSelector } from "./PokemonV2MovedamageclassSumFieldsModel.base"
import { PokemonV2MovedamageclassVarPopFieldsModel, PokemonV2MovedamageclassVarPopFieldsModelType } from "./PokemonV2MovedamageclassVarPopFieldsModel"
import { PokemonV2MovedamageclassVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassVarPopFieldsModel.base"
import { PokemonV2MovedamageclassVarSampFieldsModel, PokemonV2MovedamageclassVarSampFieldsModelType } from "./PokemonV2MovedamageclassVarSampFieldsModel"
import { PokemonV2MovedamageclassVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassVarSampFieldsModel.base"
import { PokemonV2MovedamageclassVarianceFieldsModel, PokemonV2MovedamageclassVarianceFieldsModelType } from "./PokemonV2MovedamageclassVarianceFieldsModel"
import { PokemonV2MovedamageclassVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass_aggregate_fields"), "pokemon_v2_movedamageclass_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovedamageclassAvgFieldsModelSelector | ((selector: PokemonV2MovedamageclassAvgFieldsModelSelector) => PokemonV2MovedamageclassAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovedamageclassAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovedamageclassMaxFieldsModelSelector | ((selector: PokemonV2MovedamageclassMaxFieldsModelSelector) => PokemonV2MovedamageclassMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovedamageclassMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovedamageclassMinFieldsModelSelector | ((selector: PokemonV2MovedamageclassMinFieldsModelSelector) => PokemonV2MovedamageclassMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovedamageclassMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovedamageclassStddevFieldsModelSelector | ((selector: PokemonV2MovedamageclassStddevFieldsModelSelector) => PokemonV2MovedamageclassStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovedamageclassStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovedamageclassStddevPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassStddevPopFieldsModelSelector) => PokemonV2MovedamageclassStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovedamageclassStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovedamageclassStddevSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassStddevSampFieldsModelSelector) => PokemonV2MovedamageclassStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovedamageclassStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovedamageclassSumFieldsModelSelector | ((selector: PokemonV2MovedamageclassSumFieldsModelSelector) => PokemonV2MovedamageclassSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovedamageclassSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovedamageclassVarPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassVarPopFieldsModelSelector) => PokemonV2MovedamageclassVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovedamageclassVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovedamageclassVarSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassVarSampFieldsModelSelector) => PokemonV2MovedamageclassVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovedamageclassVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovedamageclassVarianceFieldsModelSelector | ((selector: PokemonV2MovedamageclassVarianceFieldsModelSelector) => PokemonV2MovedamageclassVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovedamageclassVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassAggregateFields() {
  return new PokemonV2MovedamageclassAggregateFieldsModelSelector()
}

export const pokemonV2MovedamageclassAggregateFieldsModelPrimitives = selectFromPokemonV2MovedamageclassAggregateFields().count
