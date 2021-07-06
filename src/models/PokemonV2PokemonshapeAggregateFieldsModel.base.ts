/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonshapeAvgFieldsModel, PokemonV2PokemonshapeAvgFieldsModelType } from "./PokemonV2PokemonshapeAvgFieldsModel"
import { PokemonV2PokemonshapeAvgFieldsModelSelector } from "./PokemonV2PokemonshapeAvgFieldsModel.base"
import { PokemonV2PokemonshapeMaxFieldsModel, PokemonV2PokemonshapeMaxFieldsModelType } from "./PokemonV2PokemonshapeMaxFieldsModel"
import { PokemonV2PokemonshapeMaxFieldsModelSelector } from "./PokemonV2PokemonshapeMaxFieldsModel.base"
import { PokemonV2PokemonshapeMinFieldsModel, PokemonV2PokemonshapeMinFieldsModelType } from "./PokemonV2PokemonshapeMinFieldsModel"
import { PokemonV2PokemonshapeMinFieldsModelSelector } from "./PokemonV2PokemonshapeMinFieldsModel.base"
import { PokemonV2PokemonshapeStddevFieldsModel, PokemonV2PokemonshapeStddevFieldsModelType } from "./PokemonV2PokemonshapeStddevFieldsModel"
import { PokemonV2PokemonshapeStddevFieldsModelSelector } from "./PokemonV2PokemonshapeStddevFieldsModel.base"
import { PokemonV2PokemonshapeStddevPopFieldsModel, PokemonV2PokemonshapeStddevPopFieldsModelType } from "./PokemonV2PokemonshapeStddevPopFieldsModel"
import { PokemonV2PokemonshapeStddevPopFieldsModelSelector } from "./PokemonV2PokemonshapeStddevPopFieldsModel.base"
import { PokemonV2PokemonshapeStddevSampFieldsModel, PokemonV2PokemonshapeStddevSampFieldsModelType } from "./PokemonV2PokemonshapeStddevSampFieldsModel"
import { PokemonV2PokemonshapeStddevSampFieldsModelSelector } from "./PokemonV2PokemonshapeStddevSampFieldsModel.base"
import { PokemonV2PokemonshapeSumFieldsModel, PokemonV2PokemonshapeSumFieldsModelType } from "./PokemonV2PokemonshapeSumFieldsModel"
import { PokemonV2PokemonshapeSumFieldsModelSelector } from "./PokemonV2PokemonshapeSumFieldsModel.base"
import { PokemonV2PokemonshapeVarPopFieldsModel, PokemonV2PokemonshapeVarPopFieldsModelType } from "./PokemonV2PokemonshapeVarPopFieldsModel"
import { PokemonV2PokemonshapeVarPopFieldsModelSelector } from "./PokemonV2PokemonshapeVarPopFieldsModel.base"
import { PokemonV2PokemonshapeVarSampFieldsModel, PokemonV2PokemonshapeVarSampFieldsModelType } from "./PokemonV2PokemonshapeVarSampFieldsModel"
import { PokemonV2PokemonshapeVarSampFieldsModelSelector } from "./PokemonV2PokemonshapeVarSampFieldsModel.base"
import { PokemonV2PokemonshapeVarianceFieldsModel, PokemonV2PokemonshapeVarianceFieldsModelType } from "./PokemonV2PokemonshapeVarianceFieldsModel"
import { PokemonV2PokemonshapeVarianceFieldsModelSelector } from "./PokemonV2PokemonshapeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_aggregate_fields"), "pokemon_v2_pokemonshape_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonshapeAvgFieldsModelSelector | ((selector: PokemonV2PokemonshapeAvgFieldsModelSelector) => PokemonV2PokemonshapeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonshapeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonshapeMaxFieldsModelSelector | ((selector: PokemonV2PokemonshapeMaxFieldsModelSelector) => PokemonV2PokemonshapeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonshapeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonshapeMinFieldsModelSelector | ((selector: PokemonV2PokemonshapeMinFieldsModelSelector) => PokemonV2PokemonshapeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonshapeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonshapeStddevFieldsModelSelector | ((selector: PokemonV2PokemonshapeStddevFieldsModelSelector) => PokemonV2PokemonshapeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonshapeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonshapeStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonshapeStddevPopFieldsModelSelector) => PokemonV2PokemonshapeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonshapeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonshapeStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonshapeStddevSampFieldsModelSelector) => PokemonV2PokemonshapeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonshapeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonshapeSumFieldsModelSelector | ((selector: PokemonV2PokemonshapeSumFieldsModelSelector) => PokemonV2PokemonshapeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonshapeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonshapeVarPopFieldsModelSelector | ((selector: PokemonV2PokemonshapeVarPopFieldsModelSelector) => PokemonV2PokemonshapeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonshapeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonshapeVarSampFieldsModelSelector | ((selector: PokemonV2PokemonshapeVarSampFieldsModelSelector) => PokemonV2PokemonshapeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonshapeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonshapeVarianceFieldsModelSelector | ((selector: PokemonV2PokemonshapeVarianceFieldsModelSelector) => PokemonV2PokemonshapeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonshapeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonshapeAggregateFields() {
  return new PokemonV2PokemonshapeAggregateFieldsModelSelector()
}

export const pokemonV2PokemonshapeAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonshapeAggregateFields().count
