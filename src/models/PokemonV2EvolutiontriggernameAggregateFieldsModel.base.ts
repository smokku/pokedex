/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggernameAvgFieldsModel, PokemonV2EvolutiontriggernameAvgFieldsModelType } from "./PokemonV2EvolutiontriggernameAvgFieldsModel"
import { PokemonV2EvolutiontriggernameAvgFieldsModelSelector } from "./PokemonV2EvolutiontriggernameAvgFieldsModel.base"
import { PokemonV2EvolutiontriggernameMaxFieldsModel, PokemonV2EvolutiontriggernameMaxFieldsModelType } from "./PokemonV2EvolutiontriggernameMaxFieldsModel"
import { PokemonV2EvolutiontriggernameMaxFieldsModelSelector } from "./PokemonV2EvolutiontriggernameMaxFieldsModel.base"
import { PokemonV2EvolutiontriggernameMinFieldsModel, PokemonV2EvolutiontriggernameMinFieldsModelType } from "./PokemonV2EvolutiontriggernameMinFieldsModel"
import { PokemonV2EvolutiontriggernameMinFieldsModelSelector } from "./PokemonV2EvolutiontriggernameMinFieldsModel.base"
import { PokemonV2EvolutiontriggernameStddevFieldsModel, PokemonV2EvolutiontriggernameStddevFieldsModelType } from "./PokemonV2EvolutiontriggernameStddevFieldsModel"
import { PokemonV2EvolutiontriggernameStddevFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevFieldsModel.base"
import { PokemonV2EvolutiontriggernameStddevPopFieldsModel, PokemonV2EvolutiontriggernameStddevPopFieldsModelType } from "./PokemonV2EvolutiontriggernameStddevPopFieldsModel"
import { PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevPopFieldsModel.base"
import { PokemonV2EvolutiontriggernameStddevSampFieldsModel, PokemonV2EvolutiontriggernameStddevSampFieldsModelType } from "./PokemonV2EvolutiontriggernameStddevSampFieldsModel"
import { PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevSampFieldsModel.base"
import { PokemonV2EvolutiontriggernameSumFieldsModel, PokemonV2EvolutiontriggernameSumFieldsModelType } from "./PokemonV2EvolutiontriggernameSumFieldsModel"
import { PokemonV2EvolutiontriggernameSumFieldsModelSelector } from "./PokemonV2EvolutiontriggernameSumFieldsModel.base"
import { PokemonV2EvolutiontriggernameVarPopFieldsModel, PokemonV2EvolutiontriggernameVarPopFieldsModelType } from "./PokemonV2EvolutiontriggernameVarPopFieldsModel"
import { PokemonV2EvolutiontriggernameVarPopFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarPopFieldsModel.base"
import { PokemonV2EvolutiontriggernameVarSampFieldsModel, PokemonV2EvolutiontriggernameVarSampFieldsModelType } from "./PokemonV2EvolutiontriggernameVarSampFieldsModel"
import { PokemonV2EvolutiontriggernameVarSampFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarSampFieldsModel.base"
import { PokemonV2EvolutiontriggernameVarianceFieldsModel, PokemonV2EvolutiontriggernameVarianceFieldsModelType } from "./PokemonV2EvolutiontriggernameVarianceFieldsModel"
import { PokemonV2EvolutiontriggernameVarianceFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameAggregateFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_aggregate_fields"), "pokemon_v2_evolutiontriggername_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EvolutiontriggernameAvgFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameAvgFieldsModelSelector) => PokemonV2EvolutiontriggernameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EvolutiontriggernameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EvolutiontriggernameMaxFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameMaxFieldsModelSelector) => PokemonV2EvolutiontriggernameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EvolutiontriggernameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EvolutiontriggernameMinFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameMinFieldsModelSelector) => PokemonV2EvolutiontriggernameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EvolutiontriggernameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EvolutiontriggernameStddevFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameStddevFieldsModelSelector) => PokemonV2EvolutiontriggernameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EvolutiontriggernameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector) => PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector) => PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EvolutiontriggernameSumFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameSumFieldsModelSelector) => PokemonV2EvolutiontriggernameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EvolutiontriggernameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EvolutiontriggernameVarPopFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameVarPopFieldsModelSelector) => PokemonV2EvolutiontriggernameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EvolutiontriggernameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EvolutiontriggernameVarSampFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameVarSampFieldsModelSelector) => PokemonV2EvolutiontriggernameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EvolutiontriggernameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EvolutiontriggernameVarianceFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameVarianceFieldsModelSelector) => PokemonV2EvolutiontriggernameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EvolutiontriggernameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EvolutiontriggernameAggregateFields() {
  return new PokemonV2EvolutiontriggernameAggregateFieldsModelSelector()
}

export const pokemonV2EvolutiontriggernameAggregateFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggernameAggregateFields().count
