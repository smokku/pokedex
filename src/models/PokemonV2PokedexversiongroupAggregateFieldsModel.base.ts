/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexversiongroupAvgFieldsModel, PokemonV2PokedexversiongroupAvgFieldsModelType } from "./PokemonV2PokedexversiongroupAvgFieldsModel"
import { PokemonV2PokedexversiongroupAvgFieldsModelSelector } from "./PokemonV2PokedexversiongroupAvgFieldsModel.base"
import { PokemonV2PokedexversiongroupMaxFieldsModel, PokemonV2PokedexversiongroupMaxFieldsModelType } from "./PokemonV2PokedexversiongroupMaxFieldsModel"
import { PokemonV2PokedexversiongroupMaxFieldsModelSelector } from "./PokemonV2PokedexversiongroupMaxFieldsModel.base"
import { PokemonV2PokedexversiongroupMinFieldsModel, PokemonV2PokedexversiongroupMinFieldsModelType } from "./PokemonV2PokedexversiongroupMinFieldsModel"
import { PokemonV2PokedexversiongroupMinFieldsModelSelector } from "./PokemonV2PokedexversiongroupMinFieldsModel.base"
import { PokemonV2PokedexversiongroupStddevFieldsModel, PokemonV2PokedexversiongroupStddevFieldsModelType } from "./PokemonV2PokedexversiongroupStddevFieldsModel"
import { PokemonV2PokedexversiongroupStddevFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevFieldsModel.base"
import { PokemonV2PokedexversiongroupStddevPopFieldsModel, PokemonV2PokedexversiongroupStddevPopFieldsModelType } from "./PokemonV2PokedexversiongroupStddevPopFieldsModel"
import { PokemonV2PokedexversiongroupStddevPopFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevPopFieldsModel.base"
import { PokemonV2PokedexversiongroupStddevSampFieldsModel, PokemonV2PokedexversiongroupStddevSampFieldsModelType } from "./PokemonV2PokedexversiongroupStddevSampFieldsModel"
import { PokemonV2PokedexversiongroupStddevSampFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevSampFieldsModel.base"
import { PokemonV2PokedexversiongroupSumFieldsModel, PokemonV2PokedexversiongroupSumFieldsModelType } from "./PokemonV2PokedexversiongroupSumFieldsModel"
import { PokemonV2PokedexversiongroupSumFieldsModelSelector } from "./PokemonV2PokedexversiongroupSumFieldsModel.base"
import { PokemonV2PokedexversiongroupVarPopFieldsModel, PokemonV2PokedexversiongroupVarPopFieldsModelType } from "./PokemonV2PokedexversiongroupVarPopFieldsModel"
import { PokemonV2PokedexversiongroupVarPopFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarPopFieldsModel.base"
import { PokemonV2PokedexversiongroupVarSampFieldsModel, PokemonV2PokedexversiongroupVarSampFieldsModelType } from "./PokemonV2PokedexversiongroupVarSampFieldsModel"
import { PokemonV2PokedexversiongroupVarSampFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarSampFieldsModel.base"
import { PokemonV2PokedexversiongroupVarianceFieldsModel, PokemonV2PokedexversiongroupVarianceFieldsModelType } from "./PokemonV2PokedexversiongroupVarianceFieldsModel"
import { PokemonV2PokedexversiongroupVarianceFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokedexversiongroupAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokedexversiongroupAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup_aggregate_fields"), "pokemon_v2_pokedexversiongroup_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexversiongroupVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokedexversiongroupAvgFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupAvgFieldsModelSelector) => PokemonV2PokedexversiongroupAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokedexversiongroupAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokedexversiongroupMaxFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupMaxFieldsModelSelector) => PokemonV2PokedexversiongroupMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokedexversiongroupMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokedexversiongroupMinFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupMinFieldsModelSelector) => PokemonV2PokedexversiongroupMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokedexversiongroupMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokedexversiongroupStddevFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupStddevFieldsModelSelector) => PokemonV2PokedexversiongroupStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokedexversiongroupStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokedexversiongroupStddevPopFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupStddevPopFieldsModelSelector) => PokemonV2PokedexversiongroupStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokedexversiongroupStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokedexversiongroupStddevSampFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupStddevSampFieldsModelSelector) => PokemonV2PokedexversiongroupStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokedexversiongroupStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokedexversiongroupSumFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupSumFieldsModelSelector) => PokemonV2PokedexversiongroupSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokedexversiongroupSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokedexversiongroupVarPopFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupVarPopFieldsModelSelector) => PokemonV2PokedexversiongroupVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokedexversiongroupVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokedexversiongroupVarSampFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupVarSampFieldsModelSelector) => PokemonV2PokedexversiongroupVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokedexversiongroupVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokedexversiongroupVarianceFieldsModelSelector | ((selector: PokemonV2PokedexversiongroupVarianceFieldsModelSelector) => PokemonV2PokedexversiongroupVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokedexversiongroupVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokedexversiongroupAggregateFields() {
  return new PokemonV2PokedexversiongroupAggregateFieldsModelSelector()
}

export const pokemonV2PokedexversiongroupAggregateFieldsModelPrimitives = selectFromPokemonV2PokedexversiongroupAggregateFields().count
