/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesnameAvgFieldsModel, PokemonV2PokemonspeciesnameAvgFieldsModelType } from "./PokemonV2PokemonspeciesnameAvgFieldsModel"
import { PokemonV2PokemonspeciesnameAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesnameAvgFieldsModel.base"
import { PokemonV2PokemonspeciesnameMaxFieldsModel, PokemonV2PokemonspeciesnameMaxFieldsModelType } from "./PokemonV2PokemonspeciesnameMaxFieldsModel"
import { PokemonV2PokemonspeciesnameMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesnameMaxFieldsModel.base"
import { PokemonV2PokemonspeciesnameMinFieldsModel, PokemonV2PokemonspeciesnameMinFieldsModelType } from "./PokemonV2PokemonspeciesnameMinFieldsModel"
import { PokemonV2PokemonspeciesnameMinFieldsModelSelector } from "./PokemonV2PokemonspeciesnameMinFieldsModel.base"
import { PokemonV2PokemonspeciesnameStddevFieldsModel, PokemonV2PokemonspeciesnameStddevFieldsModelType } from "./PokemonV2PokemonspeciesnameStddevFieldsModel"
import { PokemonV2PokemonspeciesnameStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevFieldsModel.base"
import { PokemonV2PokemonspeciesnameStddevPopFieldsModel, PokemonV2PokemonspeciesnameStddevPopFieldsModelType } from "./PokemonV2PokemonspeciesnameStddevPopFieldsModel"
import { PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevPopFieldsModel.base"
import { PokemonV2PokemonspeciesnameStddevSampFieldsModel, PokemonV2PokemonspeciesnameStddevSampFieldsModelType } from "./PokemonV2PokemonspeciesnameStddevSampFieldsModel"
import { PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevSampFieldsModel.base"
import { PokemonV2PokemonspeciesnameSumFieldsModel, PokemonV2PokemonspeciesnameSumFieldsModelType } from "./PokemonV2PokemonspeciesnameSumFieldsModel"
import { PokemonV2PokemonspeciesnameSumFieldsModelSelector } from "./PokemonV2PokemonspeciesnameSumFieldsModel.base"
import { PokemonV2PokemonspeciesnameVarPopFieldsModel, PokemonV2PokemonspeciesnameVarPopFieldsModelType } from "./PokemonV2PokemonspeciesnameVarPopFieldsModel"
import { PokemonV2PokemonspeciesnameVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarPopFieldsModel.base"
import { PokemonV2PokemonspeciesnameVarSampFieldsModel, PokemonV2PokemonspeciesnameVarSampFieldsModelType } from "./PokemonV2PokemonspeciesnameVarSampFieldsModel"
import { PokemonV2PokemonspeciesnameVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarSampFieldsModel.base"
import { PokemonV2PokemonspeciesnameVarianceFieldsModel, PokemonV2PokemonspeciesnameVarianceFieldsModelType } from "./PokemonV2PokemonspeciesnameVarianceFieldsModel"
import { PokemonV2PokemonspeciesnameVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_aggregate_fields"), "pokemon_v2_pokemonspeciesname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonspeciesnameAvgFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameAvgFieldsModelSelector) => PokemonV2PokemonspeciesnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonspeciesnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonspeciesnameMaxFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameMaxFieldsModelSelector) => PokemonV2PokemonspeciesnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonspeciesnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonspeciesnameMinFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameMinFieldsModelSelector) => PokemonV2PokemonspeciesnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonspeciesnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonspeciesnameStddevFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameStddevFieldsModelSelector) => PokemonV2PokemonspeciesnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonspeciesnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector) => PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonspeciesnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector) => PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonspeciesnameSumFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameSumFieldsModelSelector) => PokemonV2PokemonspeciesnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonspeciesnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonspeciesnameVarPopFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameVarPopFieldsModelSelector) => PokemonV2PokemonspeciesnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonspeciesnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonspeciesnameVarSampFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameVarSampFieldsModelSelector) => PokemonV2PokemonspeciesnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonspeciesnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonspeciesnameVarianceFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameVarianceFieldsModelSelector) => PokemonV2PokemonspeciesnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonspeciesnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesnameAggregateFields() {
  return new PokemonV2PokemonspeciesnameAggregateFieldsModelSelector()
}

export const pokemonV2PokemonspeciesnameAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesnameAggregateFields().count
