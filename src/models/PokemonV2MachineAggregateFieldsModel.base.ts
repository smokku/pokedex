/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MachineAvgFieldsModel, PokemonV2MachineAvgFieldsModelType } from "./PokemonV2MachineAvgFieldsModel"
import { PokemonV2MachineAvgFieldsModelSelector } from "./PokemonV2MachineAvgFieldsModel.base"
import { PokemonV2MachineMaxFieldsModel, PokemonV2MachineMaxFieldsModelType } from "./PokemonV2MachineMaxFieldsModel"
import { PokemonV2MachineMaxFieldsModelSelector } from "./PokemonV2MachineMaxFieldsModel.base"
import { PokemonV2MachineMinFieldsModel, PokemonV2MachineMinFieldsModelType } from "./PokemonV2MachineMinFieldsModel"
import { PokemonV2MachineMinFieldsModelSelector } from "./PokemonV2MachineMinFieldsModel.base"
import { PokemonV2MachineStddevFieldsModel, PokemonV2MachineStddevFieldsModelType } from "./PokemonV2MachineStddevFieldsModel"
import { PokemonV2MachineStddevFieldsModelSelector } from "./PokemonV2MachineStddevFieldsModel.base"
import { PokemonV2MachineStddevPopFieldsModel, PokemonV2MachineStddevPopFieldsModelType } from "./PokemonV2MachineStddevPopFieldsModel"
import { PokemonV2MachineStddevPopFieldsModelSelector } from "./PokemonV2MachineStddevPopFieldsModel.base"
import { PokemonV2MachineStddevSampFieldsModel, PokemonV2MachineStddevSampFieldsModelType } from "./PokemonV2MachineStddevSampFieldsModel"
import { PokemonV2MachineStddevSampFieldsModelSelector } from "./PokemonV2MachineStddevSampFieldsModel.base"
import { PokemonV2MachineSumFieldsModel, PokemonV2MachineSumFieldsModelType } from "./PokemonV2MachineSumFieldsModel"
import { PokemonV2MachineSumFieldsModelSelector } from "./PokemonV2MachineSumFieldsModel.base"
import { PokemonV2MachineVarPopFieldsModel, PokemonV2MachineVarPopFieldsModelType } from "./PokemonV2MachineVarPopFieldsModel"
import { PokemonV2MachineVarPopFieldsModelSelector } from "./PokemonV2MachineVarPopFieldsModel.base"
import { PokemonV2MachineVarSampFieldsModel, PokemonV2MachineVarSampFieldsModelType } from "./PokemonV2MachineVarSampFieldsModel"
import { PokemonV2MachineVarSampFieldsModelSelector } from "./PokemonV2MachineVarSampFieldsModel.base"
import { PokemonV2MachineVarianceFieldsModel, PokemonV2MachineVarianceFieldsModelType } from "./PokemonV2MachineVarianceFieldsModel"
import { PokemonV2MachineVarianceFieldsModelSelector } from "./PokemonV2MachineVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineAggregateFieldsBase
 * auto generated base class for the model PokemonV2MachineAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_machine"
 */
export const PokemonV2MachineAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MachineAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_aggregate_fields"), "pokemon_v2_machine_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MachineAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MachineAvgFieldsModelSelector | ((selector: PokemonV2MachineAvgFieldsModelSelector) => PokemonV2MachineAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MachineAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MachineMaxFieldsModelSelector | ((selector: PokemonV2MachineMaxFieldsModelSelector) => PokemonV2MachineMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MachineMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MachineMinFieldsModelSelector | ((selector: PokemonV2MachineMinFieldsModelSelector) => PokemonV2MachineMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MachineMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MachineStddevFieldsModelSelector | ((selector: PokemonV2MachineStddevFieldsModelSelector) => PokemonV2MachineStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MachineStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MachineStddevPopFieldsModelSelector | ((selector: PokemonV2MachineStddevPopFieldsModelSelector) => PokemonV2MachineStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MachineStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MachineStddevSampFieldsModelSelector | ((selector: PokemonV2MachineStddevSampFieldsModelSelector) => PokemonV2MachineStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MachineStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MachineSumFieldsModelSelector | ((selector: PokemonV2MachineSumFieldsModelSelector) => PokemonV2MachineSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MachineSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MachineVarPopFieldsModelSelector | ((selector: PokemonV2MachineVarPopFieldsModelSelector) => PokemonV2MachineVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MachineVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MachineVarSampFieldsModelSelector | ((selector: PokemonV2MachineVarSampFieldsModelSelector) => PokemonV2MachineVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MachineVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MachineVarianceFieldsModelSelector | ((selector: PokemonV2MachineVarianceFieldsModelSelector) => PokemonV2MachineVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MachineVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MachineAggregateFields() {
  return new PokemonV2MachineAggregateFieldsModelSelector()
}

export const pokemonV2MachineAggregateFieldsModelPrimitives = selectFromPokemonV2MachineAggregateFields().count
