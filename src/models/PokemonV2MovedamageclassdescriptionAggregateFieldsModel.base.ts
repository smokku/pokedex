/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassdescriptionAvgFieldsModel, PokemonV2MovedamageclassdescriptionAvgFieldsModelType } from "./PokemonV2MovedamageclassdescriptionAvgFieldsModel"
import { PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionAvgFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionMaxFieldsModel, PokemonV2MovedamageclassdescriptionMaxFieldsModelType } from "./PokemonV2MovedamageclassdescriptionMaxFieldsModel"
import { PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionMaxFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionMinFieldsModel, PokemonV2MovedamageclassdescriptionMinFieldsModelType } from "./PokemonV2MovedamageclassdescriptionMinFieldsModel"
import { PokemonV2MovedamageclassdescriptionMinFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionMinFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionStddevFieldsModel, PokemonV2MovedamageclassdescriptionStddevFieldsModelType } from "./PokemonV2MovedamageclassdescriptionStddevFieldsModel"
import { PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionStddevPopFieldsModel, PokemonV2MovedamageclassdescriptionStddevPopFieldsModelType } from "./PokemonV2MovedamageclassdescriptionStddevPopFieldsModel"
import { PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevPopFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionStddevSampFieldsModel, PokemonV2MovedamageclassdescriptionStddevSampFieldsModelType } from "./PokemonV2MovedamageclassdescriptionStddevSampFieldsModel"
import { PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevSampFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionSumFieldsModel, PokemonV2MovedamageclassdescriptionSumFieldsModelType } from "./PokemonV2MovedamageclassdescriptionSumFieldsModel"
import { PokemonV2MovedamageclassdescriptionSumFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionSumFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionVarPopFieldsModel, PokemonV2MovedamageclassdescriptionVarPopFieldsModelType } from "./PokemonV2MovedamageclassdescriptionVarPopFieldsModel"
import { PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarPopFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionVarSampFieldsModel, PokemonV2MovedamageclassdescriptionVarSampFieldsModelType } from "./PokemonV2MovedamageclassdescriptionVarSampFieldsModel"
import { PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarSampFieldsModel.base"
import { PokemonV2MovedamageclassdescriptionVarianceFieldsModel, PokemonV2MovedamageclassdescriptionVarianceFieldsModelType } from "./PokemonV2MovedamageclassdescriptionVarianceFieldsModel"
import { PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassdescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassdescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassdescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassdescription_aggregate_fields"), "pokemon_v2_movedamageclassdescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassdescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector) => PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector) => PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovedamageclassdescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovedamageclassdescriptionMinFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionMinFieldsModelSelector) => PokemonV2MovedamageclassdescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovedamageclassdescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector) => PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector) => PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector) => PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovedamageclassdescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovedamageclassdescriptionSumFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionSumFieldsModelSelector) => PokemonV2MovedamageclassdescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovedamageclassdescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector) => PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector) => PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector | ((selector: PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector) => PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassdescriptionAggregateFields() {
  return new PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector()
}

export const pokemonV2MovedamageclassdescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2MovedamageclassdescriptionAggregateFields().count
