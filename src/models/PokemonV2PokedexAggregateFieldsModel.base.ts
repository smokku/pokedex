/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexAvgFieldsModel, PokemonV2PokedexAvgFieldsModelType } from "./PokemonV2PokedexAvgFieldsModel"
import { PokemonV2PokedexAvgFieldsModelSelector } from "./PokemonV2PokedexAvgFieldsModel.base"
import { PokemonV2PokedexMaxFieldsModel, PokemonV2PokedexMaxFieldsModelType } from "./PokemonV2PokedexMaxFieldsModel"
import { PokemonV2PokedexMaxFieldsModelSelector } from "./PokemonV2PokedexMaxFieldsModel.base"
import { PokemonV2PokedexMinFieldsModel, PokemonV2PokedexMinFieldsModelType } from "./PokemonV2PokedexMinFieldsModel"
import { PokemonV2PokedexMinFieldsModelSelector } from "./PokemonV2PokedexMinFieldsModel.base"
import { PokemonV2PokedexStddevFieldsModel, PokemonV2PokedexStddevFieldsModelType } from "./PokemonV2PokedexStddevFieldsModel"
import { PokemonV2PokedexStddevFieldsModelSelector } from "./PokemonV2PokedexStddevFieldsModel.base"
import { PokemonV2PokedexStddevPopFieldsModel, PokemonV2PokedexStddevPopFieldsModelType } from "./PokemonV2PokedexStddevPopFieldsModel"
import { PokemonV2PokedexStddevPopFieldsModelSelector } from "./PokemonV2PokedexStddevPopFieldsModel.base"
import { PokemonV2PokedexStddevSampFieldsModel, PokemonV2PokedexStddevSampFieldsModelType } from "./PokemonV2PokedexStddevSampFieldsModel"
import { PokemonV2PokedexStddevSampFieldsModelSelector } from "./PokemonV2PokedexStddevSampFieldsModel.base"
import { PokemonV2PokedexSumFieldsModel, PokemonV2PokedexSumFieldsModelType } from "./PokemonV2PokedexSumFieldsModel"
import { PokemonV2PokedexSumFieldsModelSelector } from "./PokemonV2PokedexSumFieldsModel.base"
import { PokemonV2PokedexVarPopFieldsModel, PokemonV2PokedexVarPopFieldsModelType } from "./PokemonV2PokedexVarPopFieldsModel"
import { PokemonV2PokedexVarPopFieldsModelSelector } from "./PokemonV2PokedexVarPopFieldsModel.base"
import { PokemonV2PokedexVarSampFieldsModel, PokemonV2PokedexVarSampFieldsModelType } from "./PokemonV2PokedexVarSampFieldsModel"
import { PokemonV2PokedexVarSampFieldsModelSelector } from "./PokemonV2PokedexVarSampFieldsModel.base"
import { PokemonV2PokedexVarianceFieldsModel, PokemonV2PokedexVarianceFieldsModelType } from "./PokemonV2PokedexVarianceFieldsModel"
import { PokemonV2PokedexVarianceFieldsModelSelector } from "./PokemonV2PokedexVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokedexAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokedexAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_aggregate_fields"), "pokemon_v2_pokedex_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokedexAvgFieldsModelSelector | ((selector: PokemonV2PokedexAvgFieldsModelSelector) => PokemonV2PokedexAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokedexAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokedexMaxFieldsModelSelector | ((selector: PokemonV2PokedexMaxFieldsModelSelector) => PokemonV2PokedexMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokedexMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokedexMinFieldsModelSelector | ((selector: PokemonV2PokedexMinFieldsModelSelector) => PokemonV2PokedexMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokedexMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokedexStddevFieldsModelSelector | ((selector: PokemonV2PokedexStddevFieldsModelSelector) => PokemonV2PokedexStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokedexStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokedexStddevPopFieldsModelSelector | ((selector: PokemonV2PokedexStddevPopFieldsModelSelector) => PokemonV2PokedexStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokedexStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokedexStddevSampFieldsModelSelector | ((selector: PokemonV2PokedexStddevSampFieldsModelSelector) => PokemonV2PokedexStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokedexStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokedexSumFieldsModelSelector | ((selector: PokemonV2PokedexSumFieldsModelSelector) => PokemonV2PokedexSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokedexSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokedexVarPopFieldsModelSelector | ((selector: PokemonV2PokedexVarPopFieldsModelSelector) => PokemonV2PokedexVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokedexVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokedexVarSampFieldsModelSelector | ((selector: PokemonV2PokedexVarSampFieldsModelSelector) => PokemonV2PokedexVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokedexVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokedexVarianceFieldsModelSelector | ((selector: PokemonV2PokedexVarianceFieldsModelSelector) => PokemonV2PokedexVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokedexVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokedexAggregateFields() {
  return new PokemonV2PokedexAggregateFieldsModelSelector()
}

export const pokemonV2PokedexAggregateFieldsModelPrimitives = selectFromPokemonV2PokedexAggregateFields().count
