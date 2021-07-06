/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthratedescriptionAvgFieldsModel, PokemonV2GrowthratedescriptionAvgFieldsModelType } from "./PokemonV2GrowthratedescriptionAvgFieldsModel"
import { PokemonV2GrowthratedescriptionAvgFieldsModelSelector } from "./PokemonV2GrowthratedescriptionAvgFieldsModel.base"
import { PokemonV2GrowthratedescriptionMaxFieldsModel, PokemonV2GrowthratedescriptionMaxFieldsModelType } from "./PokemonV2GrowthratedescriptionMaxFieldsModel"
import { PokemonV2GrowthratedescriptionMaxFieldsModelSelector } from "./PokemonV2GrowthratedescriptionMaxFieldsModel.base"
import { PokemonV2GrowthratedescriptionMinFieldsModel, PokemonV2GrowthratedescriptionMinFieldsModelType } from "./PokemonV2GrowthratedescriptionMinFieldsModel"
import { PokemonV2GrowthratedescriptionMinFieldsModelSelector } from "./PokemonV2GrowthratedescriptionMinFieldsModel.base"
import { PokemonV2GrowthratedescriptionStddevFieldsModel, PokemonV2GrowthratedescriptionStddevFieldsModelType } from "./PokemonV2GrowthratedescriptionStddevFieldsModel"
import { PokemonV2GrowthratedescriptionStddevFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevFieldsModel.base"
import { PokemonV2GrowthratedescriptionStddevPopFieldsModel, PokemonV2GrowthratedescriptionStddevPopFieldsModelType } from "./PokemonV2GrowthratedescriptionStddevPopFieldsModel"
import { PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevPopFieldsModel.base"
import { PokemonV2GrowthratedescriptionStddevSampFieldsModel, PokemonV2GrowthratedescriptionStddevSampFieldsModelType } from "./PokemonV2GrowthratedescriptionStddevSampFieldsModel"
import { PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevSampFieldsModel.base"
import { PokemonV2GrowthratedescriptionSumFieldsModel, PokemonV2GrowthratedescriptionSumFieldsModelType } from "./PokemonV2GrowthratedescriptionSumFieldsModel"
import { PokemonV2GrowthratedescriptionSumFieldsModelSelector } from "./PokemonV2GrowthratedescriptionSumFieldsModel.base"
import { PokemonV2GrowthratedescriptionVarPopFieldsModel, PokemonV2GrowthratedescriptionVarPopFieldsModelType } from "./PokemonV2GrowthratedescriptionVarPopFieldsModel"
import { PokemonV2GrowthratedescriptionVarPopFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarPopFieldsModel.base"
import { PokemonV2GrowthratedescriptionVarSampFieldsModel, PokemonV2GrowthratedescriptionVarSampFieldsModelType } from "./PokemonV2GrowthratedescriptionVarSampFieldsModel"
import { PokemonV2GrowthratedescriptionVarSampFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarSampFieldsModel.base"
import { PokemonV2GrowthratedescriptionVarianceFieldsModel, PokemonV2GrowthratedescriptionVarianceFieldsModelType } from "./PokemonV2GrowthratedescriptionVarianceFieldsModel"
import { PokemonV2GrowthratedescriptionVarianceFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthratedescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2GrowthratedescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2GrowthratedescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthratedescription_aggregate_fields"), "pokemon_v2_growthratedescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthratedescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthratedescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2GrowthratedescriptionAvgFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionAvgFieldsModelSelector) => PokemonV2GrowthratedescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2GrowthratedescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2GrowthratedescriptionMaxFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionMaxFieldsModelSelector) => PokemonV2GrowthratedescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2GrowthratedescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2GrowthratedescriptionMinFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionMinFieldsModelSelector) => PokemonV2GrowthratedescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2GrowthratedescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2GrowthratedescriptionStddevFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionStddevFieldsModelSelector) => PokemonV2GrowthratedescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2GrowthratedescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector) => PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2GrowthratedescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector) => PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2GrowthratedescriptionSumFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionSumFieldsModelSelector) => PokemonV2GrowthratedescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2GrowthratedescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2GrowthratedescriptionVarPopFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionVarPopFieldsModelSelector) => PokemonV2GrowthratedescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2GrowthratedescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2GrowthratedescriptionVarSampFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionVarSampFieldsModelSelector) => PokemonV2GrowthratedescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2GrowthratedescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2GrowthratedescriptionVarianceFieldsModelSelector | ((selector: PokemonV2GrowthratedescriptionVarianceFieldsModelSelector) => PokemonV2GrowthratedescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2GrowthratedescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2GrowthratedescriptionAggregateFields() {
  return new PokemonV2GrowthratedescriptionAggregateFieldsModelSelector()
}

export const pokemonV2GrowthratedescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2GrowthratedescriptionAggregateFields().count
