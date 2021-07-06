/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionnameAvgFieldsModel, PokemonV2EncounterconditionnameAvgFieldsModelType } from "./PokemonV2EncounterconditionnameAvgFieldsModel"
import { PokemonV2EncounterconditionnameAvgFieldsModelSelector } from "./PokemonV2EncounterconditionnameAvgFieldsModel.base"
import { PokemonV2EncounterconditionnameMaxFieldsModel, PokemonV2EncounterconditionnameMaxFieldsModelType } from "./PokemonV2EncounterconditionnameMaxFieldsModel"
import { PokemonV2EncounterconditionnameMaxFieldsModelSelector } from "./PokemonV2EncounterconditionnameMaxFieldsModel.base"
import { PokemonV2EncounterconditionnameMinFieldsModel, PokemonV2EncounterconditionnameMinFieldsModelType } from "./PokemonV2EncounterconditionnameMinFieldsModel"
import { PokemonV2EncounterconditionnameMinFieldsModelSelector } from "./PokemonV2EncounterconditionnameMinFieldsModel.base"
import { PokemonV2EncounterconditionnameStddevFieldsModel, PokemonV2EncounterconditionnameStddevFieldsModelType } from "./PokemonV2EncounterconditionnameStddevFieldsModel"
import { PokemonV2EncounterconditionnameStddevFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevFieldsModel.base"
import { PokemonV2EncounterconditionnameStddevPopFieldsModel, PokemonV2EncounterconditionnameStddevPopFieldsModelType } from "./PokemonV2EncounterconditionnameStddevPopFieldsModel"
import { PokemonV2EncounterconditionnameStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevPopFieldsModel.base"
import { PokemonV2EncounterconditionnameStddevSampFieldsModel, PokemonV2EncounterconditionnameStddevSampFieldsModelType } from "./PokemonV2EncounterconditionnameStddevSampFieldsModel"
import { PokemonV2EncounterconditionnameStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevSampFieldsModel.base"
import { PokemonV2EncounterconditionnameSumFieldsModel, PokemonV2EncounterconditionnameSumFieldsModelType } from "./PokemonV2EncounterconditionnameSumFieldsModel"
import { PokemonV2EncounterconditionnameSumFieldsModelSelector } from "./PokemonV2EncounterconditionnameSumFieldsModel.base"
import { PokemonV2EncounterconditionnameVarPopFieldsModel, PokemonV2EncounterconditionnameVarPopFieldsModelType } from "./PokemonV2EncounterconditionnameVarPopFieldsModel"
import { PokemonV2EncounterconditionnameVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarPopFieldsModel.base"
import { PokemonV2EncounterconditionnameVarSampFieldsModel, PokemonV2EncounterconditionnameVarSampFieldsModelType } from "./PokemonV2EncounterconditionnameVarSampFieldsModel"
import { PokemonV2EncounterconditionnameVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarSampFieldsModel.base"
import { PokemonV2EncounterconditionnameVarianceFieldsModel, PokemonV2EncounterconditionnameVarianceFieldsModelType } from "./PokemonV2EncounterconditionnameVarianceFieldsModel"
import { PokemonV2EncounterconditionnameVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_aggregate_fields"), "pokemon_v2_encounterconditionname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterconditionnameAvgFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameAvgFieldsModelSelector) => PokemonV2EncounterconditionnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterconditionnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterconditionnameMaxFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameMaxFieldsModelSelector) => PokemonV2EncounterconditionnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterconditionnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterconditionnameMinFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameMinFieldsModelSelector) => PokemonV2EncounterconditionnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterconditionnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterconditionnameStddevFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameStddevFieldsModelSelector) => PokemonV2EncounterconditionnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterconditionnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterconditionnameStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameStddevPopFieldsModelSelector) => PokemonV2EncounterconditionnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterconditionnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterconditionnameStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameStddevSampFieldsModelSelector) => PokemonV2EncounterconditionnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterconditionnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterconditionnameSumFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameSumFieldsModelSelector) => PokemonV2EncounterconditionnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterconditionnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterconditionnameVarPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameVarPopFieldsModelSelector) => PokemonV2EncounterconditionnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterconditionnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterconditionnameVarSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameVarSampFieldsModelSelector) => PokemonV2EncounterconditionnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterconditionnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterconditionnameVarianceFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameVarianceFieldsModelSelector) => PokemonV2EncounterconditionnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterconditionnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionnameAggregateFields() {
  return new PokemonV2EncounterconditionnameAggregateFieldsModelSelector()
}

export const pokemonV2EncounterconditionnameAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterconditionnameAggregateFields().count
