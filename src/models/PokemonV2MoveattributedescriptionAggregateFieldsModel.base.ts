/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributedescriptionAvgFieldsModel, PokemonV2MoveattributedescriptionAvgFieldsModelType } from "./PokemonV2MoveattributedescriptionAvgFieldsModel"
import { PokemonV2MoveattributedescriptionAvgFieldsModelSelector } from "./PokemonV2MoveattributedescriptionAvgFieldsModel.base"
import { PokemonV2MoveattributedescriptionMaxFieldsModel, PokemonV2MoveattributedescriptionMaxFieldsModelType } from "./PokemonV2MoveattributedescriptionMaxFieldsModel"
import { PokemonV2MoveattributedescriptionMaxFieldsModelSelector } from "./PokemonV2MoveattributedescriptionMaxFieldsModel.base"
import { PokemonV2MoveattributedescriptionMinFieldsModel, PokemonV2MoveattributedescriptionMinFieldsModelType } from "./PokemonV2MoveattributedescriptionMinFieldsModel"
import { PokemonV2MoveattributedescriptionMinFieldsModelSelector } from "./PokemonV2MoveattributedescriptionMinFieldsModel.base"
import { PokemonV2MoveattributedescriptionStddevFieldsModel, PokemonV2MoveattributedescriptionStddevFieldsModelType } from "./PokemonV2MoveattributedescriptionStddevFieldsModel"
import { PokemonV2MoveattributedescriptionStddevFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevFieldsModel.base"
import { PokemonV2MoveattributedescriptionStddevPopFieldsModel, PokemonV2MoveattributedescriptionStddevPopFieldsModelType } from "./PokemonV2MoveattributedescriptionStddevPopFieldsModel"
import { PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevPopFieldsModel.base"
import { PokemonV2MoveattributedescriptionStddevSampFieldsModel, PokemonV2MoveattributedescriptionStddevSampFieldsModelType } from "./PokemonV2MoveattributedescriptionStddevSampFieldsModel"
import { PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevSampFieldsModel.base"
import { PokemonV2MoveattributedescriptionSumFieldsModel, PokemonV2MoveattributedescriptionSumFieldsModelType } from "./PokemonV2MoveattributedescriptionSumFieldsModel"
import { PokemonV2MoveattributedescriptionSumFieldsModelSelector } from "./PokemonV2MoveattributedescriptionSumFieldsModel.base"
import { PokemonV2MoveattributedescriptionVarPopFieldsModel, PokemonV2MoveattributedescriptionVarPopFieldsModelType } from "./PokemonV2MoveattributedescriptionVarPopFieldsModel"
import { PokemonV2MoveattributedescriptionVarPopFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarPopFieldsModel.base"
import { PokemonV2MoveattributedescriptionVarSampFieldsModel, PokemonV2MoveattributedescriptionVarSampFieldsModelType } from "./PokemonV2MoveattributedescriptionVarSampFieldsModel"
import { PokemonV2MoveattributedescriptionVarSampFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarSampFieldsModel.base"
import { PokemonV2MoveattributedescriptionVarianceFieldsModel, PokemonV2MoveattributedescriptionVarianceFieldsModelType } from "./PokemonV2MoveattributedescriptionVarianceFieldsModel"
import { PokemonV2MoveattributedescriptionVarianceFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveattributedescription"
 */
export const PokemonV2MoveattributedescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_aggregate_fields"), "pokemon_v2_moveattributedescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributedescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveattributedescriptionAvgFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionAvgFieldsModelSelector) => PokemonV2MoveattributedescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveattributedescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveattributedescriptionMaxFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionMaxFieldsModelSelector) => PokemonV2MoveattributedescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveattributedescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveattributedescriptionMinFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionMinFieldsModelSelector) => PokemonV2MoveattributedescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveattributedescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveattributedescriptionStddevFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionStddevFieldsModelSelector) => PokemonV2MoveattributedescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveattributedescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector) => PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector) => PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveattributedescriptionSumFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionSumFieldsModelSelector) => PokemonV2MoveattributedescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveattributedescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveattributedescriptionVarPopFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionVarPopFieldsModelSelector) => PokemonV2MoveattributedescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveattributedescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveattributedescriptionVarSampFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionVarSampFieldsModelSelector) => PokemonV2MoveattributedescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveattributedescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveattributedescriptionVarianceFieldsModelSelector | ((selector: PokemonV2MoveattributedescriptionVarianceFieldsModelSelector) => PokemonV2MoveattributedescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveattributedescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributedescriptionAggregateFields() {
  return new PokemonV2MoveattributedescriptionAggregateFieldsModelSelector()
}

export const pokemonV2MoveattributedescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2MoveattributedescriptionAggregateFields().count
