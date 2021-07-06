/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodnameAvgFieldsModel, PokemonV2EncountermethodnameAvgFieldsModelType } from "./PokemonV2EncountermethodnameAvgFieldsModel"
import { PokemonV2EncountermethodnameAvgFieldsModelSelector } from "./PokemonV2EncountermethodnameAvgFieldsModel.base"
import { PokemonV2EncountermethodnameMaxFieldsModel, PokemonV2EncountermethodnameMaxFieldsModelType } from "./PokemonV2EncountermethodnameMaxFieldsModel"
import { PokemonV2EncountermethodnameMaxFieldsModelSelector } from "./PokemonV2EncountermethodnameMaxFieldsModel.base"
import { PokemonV2EncountermethodnameMinFieldsModel, PokemonV2EncountermethodnameMinFieldsModelType } from "./PokemonV2EncountermethodnameMinFieldsModel"
import { PokemonV2EncountermethodnameMinFieldsModelSelector } from "./PokemonV2EncountermethodnameMinFieldsModel.base"
import { PokemonV2EncountermethodnameStddevFieldsModel, PokemonV2EncountermethodnameStddevFieldsModelType } from "./PokemonV2EncountermethodnameStddevFieldsModel"
import { PokemonV2EncountermethodnameStddevFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevFieldsModel.base"
import { PokemonV2EncountermethodnameStddevPopFieldsModel, PokemonV2EncountermethodnameStddevPopFieldsModelType } from "./PokemonV2EncountermethodnameStddevPopFieldsModel"
import { PokemonV2EncountermethodnameStddevPopFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevPopFieldsModel.base"
import { PokemonV2EncountermethodnameStddevSampFieldsModel, PokemonV2EncountermethodnameStddevSampFieldsModelType } from "./PokemonV2EncountermethodnameStddevSampFieldsModel"
import { PokemonV2EncountermethodnameStddevSampFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevSampFieldsModel.base"
import { PokemonV2EncountermethodnameSumFieldsModel, PokemonV2EncountermethodnameSumFieldsModelType } from "./PokemonV2EncountermethodnameSumFieldsModel"
import { PokemonV2EncountermethodnameSumFieldsModelSelector } from "./PokemonV2EncountermethodnameSumFieldsModel.base"
import { PokemonV2EncountermethodnameVarPopFieldsModel, PokemonV2EncountermethodnameVarPopFieldsModelType } from "./PokemonV2EncountermethodnameVarPopFieldsModel"
import { PokemonV2EncountermethodnameVarPopFieldsModelSelector } from "./PokemonV2EncountermethodnameVarPopFieldsModel.base"
import { PokemonV2EncountermethodnameVarSampFieldsModel, PokemonV2EncountermethodnameVarSampFieldsModelType } from "./PokemonV2EncountermethodnameVarSampFieldsModel"
import { PokemonV2EncountermethodnameVarSampFieldsModelSelector } from "./PokemonV2EncountermethodnameVarSampFieldsModel.base"
import { PokemonV2EncountermethodnameVarianceFieldsModel, PokemonV2EncountermethodnameVarianceFieldsModelType } from "./PokemonV2EncountermethodnameVarianceFieldsModel"
import { PokemonV2EncountermethodnameVarianceFieldsModelSelector } from "./PokemonV2EncountermethodnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_aggregate_fields"), "pokemon_v2_encountermethodname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncountermethodnameAvgFieldsModelSelector | ((selector: PokemonV2EncountermethodnameAvgFieldsModelSelector) => PokemonV2EncountermethodnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncountermethodnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncountermethodnameMaxFieldsModelSelector | ((selector: PokemonV2EncountermethodnameMaxFieldsModelSelector) => PokemonV2EncountermethodnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncountermethodnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncountermethodnameMinFieldsModelSelector | ((selector: PokemonV2EncountermethodnameMinFieldsModelSelector) => PokemonV2EncountermethodnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncountermethodnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncountermethodnameStddevFieldsModelSelector | ((selector: PokemonV2EncountermethodnameStddevFieldsModelSelector) => PokemonV2EncountermethodnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncountermethodnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncountermethodnameStddevPopFieldsModelSelector | ((selector: PokemonV2EncountermethodnameStddevPopFieldsModelSelector) => PokemonV2EncountermethodnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncountermethodnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncountermethodnameStddevSampFieldsModelSelector | ((selector: PokemonV2EncountermethodnameStddevSampFieldsModelSelector) => PokemonV2EncountermethodnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncountermethodnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncountermethodnameSumFieldsModelSelector | ((selector: PokemonV2EncountermethodnameSumFieldsModelSelector) => PokemonV2EncountermethodnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncountermethodnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncountermethodnameVarPopFieldsModelSelector | ((selector: PokemonV2EncountermethodnameVarPopFieldsModelSelector) => PokemonV2EncountermethodnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncountermethodnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncountermethodnameVarSampFieldsModelSelector | ((selector: PokemonV2EncountermethodnameVarSampFieldsModelSelector) => PokemonV2EncountermethodnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncountermethodnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncountermethodnameVarianceFieldsModelSelector | ((selector: PokemonV2EncountermethodnameVarianceFieldsModelSelector) => PokemonV2EncountermethodnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncountermethodnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncountermethodnameAggregateFields() {
  return new PokemonV2EncountermethodnameAggregateFieldsModelSelector()
}

export const pokemonV2EncountermethodnameAggregateFieldsModelPrimitives = selectFromPokemonV2EncountermethodnameAggregateFields().count
