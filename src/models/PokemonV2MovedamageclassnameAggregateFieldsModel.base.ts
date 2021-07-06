/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovedamageclassnameAvgFieldsModel, PokemonV2MovedamageclassnameAvgFieldsModelType } from "./PokemonV2MovedamageclassnameAvgFieldsModel"
import { PokemonV2MovedamageclassnameAvgFieldsModelSelector } from "./PokemonV2MovedamageclassnameAvgFieldsModel.base"
import { PokemonV2MovedamageclassnameMaxFieldsModel, PokemonV2MovedamageclassnameMaxFieldsModelType } from "./PokemonV2MovedamageclassnameMaxFieldsModel"
import { PokemonV2MovedamageclassnameMaxFieldsModelSelector } from "./PokemonV2MovedamageclassnameMaxFieldsModel.base"
import { PokemonV2MovedamageclassnameMinFieldsModel, PokemonV2MovedamageclassnameMinFieldsModelType } from "./PokemonV2MovedamageclassnameMinFieldsModel"
import { PokemonV2MovedamageclassnameMinFieldsModelSelector } from "./PokemonV2MovedamageclassnameMinFieldsModel.base"
import { PokemonV2MovedamageclassnameStddevFieldsModel, PokemonV2MovedamageclassnameStddevFieldsModelType } from "./PokemonV2MovedamageclassnameStddevFieldsModel"
import { PokemonV2MovedamageclassnameStddevFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevFieldsModel.base"
import { PokemonV2MovedamageclassnameStddevPopFieldsModel, PokemonV2MovedamageclassnameStddevPopFieldsModelType } from "./PokemonV2MovedamageclassnameStddevPopFieldsModel"
import { PokemonV2MovedamageclassnameStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevPopFieldsModel.base"
import { PokemonV2MovedamageclassnameStddevSampFieldsModel, PokemonV2MovedamageclassnameStddevSampFieldsModelType } from "./PokemonV2MovedamageclassnameStddevSampFieldsModel"
import { PokemonV2MovedamageclassnameStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevSampFieldsModel.base"
import { PokemonV2MovedamageclassnameSumFieldsModel, PokemonV2MovedamageclassnameSumFieldsModelType } from "./PokemonV2MovedamageclassnameSumFieldsModel"
import { PokemonV2MovedamageclassnameSumFieldsModelSelector } from "./PokemonV2MovedamageclassnameSumFieldsModel.base"
import { PokemonV2MovedamageclassnameVarPopFieldsModel, PokemonV2MovedamageclassnameVarPopFieldsModelType } from "./PokemonV2MovedamageclassnameVarPopFieldsModel"
import { PokemonV2MovedamageclassnameVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarPopFieldsModel.base"
import { PokemonV2MovedamageclassnameVarSampFieldsModel, PokemonV2MovedamageclassnameVarSampFieldsModelType } from "./PokemonV2MovedamageclassnameVarSampFieldsModel"
import { PokemonV2MovedamageclassnameVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarSampFieldsModel.base"
import { PokemonV2MovedamageclassnameVarianceFieldsModel, PokemonV2MovedamageclassnameVarianceFieldsModelType } from "./PokemonV2MovedamageclassnameVarianceFieldsModel"
import { PokemonV2MovedamageclassnameVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovedamageclassnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movedamageclassname"
 */
export const PokemonV2MovedamageclassnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovedamageclassnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclassname_aggregate_fields"), "pokemon_v2_movedamageclassname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovedamageclassnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovedamageclassnameAvgFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameAvgFieldsModelSelector) => PokemonV2MovedamageclassnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovedamageclassnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovedamageclassnameMaxFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameMaxFieldsModelSelector) => PokemonV2MovedamageclassnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovedamageclassnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovedamageclassnameMinFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameMinFieldsModelSelector) => PokemonV2MovedamageclassnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovedamageclassnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovedamageclassnameStddevFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameStddevFieldsModelSelector) => PokemonV2MovedamageclassnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovedamageclassnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovedamageclassnameStddevPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameStddevPopFieldsModelSelector) => PokemonV2MovedamageclassnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovedamageclassnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovedamageclassnameStddevSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameStddevSampFieldsModelSelector) => PokemonV2MovedamageclassnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovedamageclassnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovedamageclassnameSumFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameSumFieldsModelSelector) => PokemonV2MovedamageclassnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovedamageclassnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovedamageclassnameVarPopFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameVarPopFieldsModelSelector) => PokemonV2MovedamageclassnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovedamageclassnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovedamageclassnameVarSampFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameVarSampFieldsModelSelector) => PokemonV2MovedamageclassnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovedamageclassnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovedamageclassnameVarianceFieldsModelSelector | ((selector: PokemonV2MovedamageclassnameVarianceFieldsModelSelector) => PokemonV2MovedamageclassnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovedamageclassnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovedamageclassnameAggregateFields() {
  return new PokemonV2MovedamageclassnameAggregateFieldsModelSelector()
}

export const pokemonV2MovedamageclassnameAggregateFieldsModelPrimitives = selectFromPokemonV2MovedamageclassnameAggregateFields().count
