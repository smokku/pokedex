/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemontypeAvgFieldsModel, PokemonV2PokemontypeAvgFieldsModelType } from "./PokemonV2PokemontypeAvgFieldsModel"
import { PokemonV2PokemontypeAvgFieldsModelSelector } from "./PokemonV2PokemontypeAvgFieldsModel.base"
import { PokemonV2PokemontypeMaxFieldsModel, PokemonV2PokemontypeMaxFieldsModelType } from "./PokemonV2PokemontypeMaxFieldsModel"
import { PokemonV2PokemontypeMaxFieldsModelSelector } from "./PokemonV2PokemontypeMaxFieldsModel.base"
import { PokemonV2PokemontypeMinFieldsModel, PokemonV2PokemontypeMinFieldsModelType } from "./PokemonV2PokemontypeMinFieldsModel"
import { PokemonV2PokemontypeMinFieldsModelSelector } from "./PokemonV2PokemontypeMinFieldsModel.base"
import { PokemonV2PokemontypeStddevFieldsModel, PokemonV2PokemontypeStddevFieldsModelType } from "./PokemonV2PokemontypeStddevFieldsModel"
import { PokemonV2PokemontypeStddevFieldsModelSelector } from "./PokemonV2PokemontypeStddevFieldsModel.base"
import { PokemonV2PokemontypeStddevPopFieldsModel, PokemonV2PokemontypeStddevPopFieldsModelType } from "./PokemonV2PokemontypeStddevPopFieldsModel"
import { PokemonV2PokemontypeStddevPopFieldsModelSelector } from "./PokemonV2PokemontypeStddevPopFieldsModel.base"
import { PokemonV2PokemontypeStddevSampFieldsModel, PokemonV2PokemontypeStddevSampFieldsModelType } from "./PokemonV2PokemontypeStddevSampFieldsModel"
import { PokemonV2PokemontypeStddevSampFieldsModelSelector } from "./PokemonV2PokemontypeStddevSampFieldsModel.base"
import { PokemonV2PokemontypeSumFieldsModel, PokemonV2PokemontypeSumFieldsModelType } from "./PokemonV2PokemontypeSumFieldsModel"
import { PokemonV2PokemontypeSumFieldsModelSelector } from "./PokemonV2PokemontypeSumFieldsModel.base"
import { PokemonV2PokemontypeVarPopFieldsModel, PokemonV2PokemontypeVarPopFieldsModelType } from "./PokemonV2PokemontypeVarPopFieldsModel"
import { PokemonV2PokemontypeVarPopFieldsModelSelector } from "./PokemonV2PokemontypeVarPopFieldsModel.base"
import { PokemonV2PokemontypeVarSampFieldsModel, PokemonV2PokemontypeVarSampFieldsModelType } from "./PokemonV2PokemontypeVarSampFieldsModel"
import { PokemonV2PokemontypeVarSampFieldsModelSelector } from "./PokemonV2PokemontypeVarSampFieldsModel.base"
import { PokemonV2PokemontypeVarianceFieldsModel, PokemonV2PokemontypeVarianceFieldsModelType } from "./PokemonV2PokemontypeVarianceFieldsModel"
import { PokemonV2PokemontypeVarianceFieldsModelSelector } from "./PokemonV2PokemontypeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemontypeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_aggregate_fields"), "pokemon_v2_pokemontype_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemontypeAvgFieldsModelSelector | ((selector: PokemonV2PokemontypeAvgFieldsModelSelector) => PokemonV2PokemontypeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemontypeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemontypeMaxFieldsModelSelector | ((selector: PokemonV2PokemontypeMaxFieldsModelSelector) => PokemonV2PokemontypeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemontypeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemontypeMinFieldsModelSelector | ((selector: PokemonV2PokemontypeMinFieldsModelSelector) => PokemonV2PokemontypeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemontypeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemontypeStddevFieldsModelSelector | ((selector: PokemonV2PokemontypeStddevFieldsModelSelector) => PokemonV2PokemontypeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemontypeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemontypeStddevPopFieldsModelSelector | ((selector: PokemonV2PokemontypeStddevPopFieldsModelSelector) => PokemonV2PokemontypeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemontypeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemontypeStddevSampFieldsModelSelector | ((selector: PokemonV2PokemontypeStddevSampFieldsModelSelector) => PokemonV2PokemontypeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemontypeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemontypeSumFieldsModelSelector | ((selector: PokemonV2PokemontypeSumFieldsModelSelector) => PokemonV2PokemontypeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemontypeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemontypeVarPopFieldsModelSelector | ((selector: PokemonV2PokemontypeVarPopFieldsModelSelector) => PokemonV2PokemontypeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemontypeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemontypeVarSampFieldsModelSelector | ((selector: PokemonV2PokemontypeVarSampFieldsModelSelector) => PokemonV2PokemontypeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemontypeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemontypeVarianceFieldsModelSelector | ((selector: PokemonV2PokemontypeVarianceFieldsModelSelector) => PokemonV2PokemontypeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemontypeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemontypeAggregateFields() {
  return new PokemonV2PokemontypeAggregateFieldsModelSelector()
}

export const pokemonV2PokemontypeAggregateFieldsModelPrimitives = selectFromPokemonV2PokemontypeAggregateFields().count
