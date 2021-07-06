/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicdescriptionAvgFieldsModel, PokemonV2CharacteristicdescriptionAvgFieldsModelType } from "./PokemonV2CharacteristicdescriptionAvgFieldsModel"
import { PokemonV2CharacteristicdescriptionAvgFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionAvgFieldsModel.base"
import { PokemonV2CharacteristicdescriptionMaxFieldsModel, PokemonV2CharacteristicdescriptionMaxFieldsModelType } from "./PokemonV2CharacteristicdescriptionMaxFieldsModel"
import { PokemonV2CharacteristicdescriptionMaxFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionMaxFieldsModel.base"
import { PokemonV2CharacteristicdescriptionMinFieldsModel, PokemonV2CharacteristicdescriptionMinFieldsModelType } from "./PokemonV2CharacteristicdescriptionMinFieldsModel"
import { PokemonV2CharacteristicdescriptionMinFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionMinFieldsModel.base"
import { PokemonV2CharacteristicdescriptionStddevFieldsModel, PokemonV2CharacteristicdescriptionStddevFieldsModelType } from "./PokemonV2CharacteristicdescriptionStddevFieldsModel"
import { PokemonV2CharacteristicdescriptionStddevFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevFieldsModel.base"
import { PokemonV2CharacteristicdescriptionStddevPopFieldsModel, PokemonV2CharacteristicdescriptionStddevPopFieldsModelType } from "./PokemonV2CharacteristicdescriptionStddevPopFieldsModel"
import { PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevPopFieldsModel.base"
import { PokemonV2CharacteristicdescriptionStddevSampFieldsModel, PokemonV2CharacteristicdescriptionStddevSampFieldsModelType } from "./PokemonV2CharacteristicdescriptionStddevSampFieldsModel"
import { PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevSampFieldsModel.base"
import { PokemonV2CharacteristicdescriptionSumFieldsModel, PokemonV2CharacteristicdescriptionSumFieldsModelType } from "./PokemonV2CharacteristicdescriptionSumFieldsModel"
import { PokemonV2CharacteristicdescriptionSumFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionSumFieldsModel.base"
import { PokemonV2CharacteristicdescriptionVarPopFieldsModel, PokemonV2CharacteristicdescriptionVarPopFieldsModelType } from "./PokemonV2CharacteristicdescriptionVarPopFieldsModel"
import { PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarPopFieldsModel.base"
import { PokemonV2CharacteristicdescriptionVarSampFieldsModel, PokemonV2CharacteristicdescriptionVarSampFieldsModelType } from "./PokemonV2CharacteristicdescriptionVarSampFieldsModel"
import { PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarSampFieldsModel.base"
import { PokemonV2CharacteristicdescriptionVarianceFieldsModel, PokemonV2CharacteristicdescriptionVarianceFieldsModelType } from "./PokemonV2CharacteristicdescriptionVarianceFieldsModel"
import { PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicdescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicdescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicdescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristicdescription_aggregate_fields"), "pokemon_v2_characteristicdescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicdescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2CharacteristicdescriptionAvgFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionAvgFieldsModelSelector) => PokemonV2CharacteristicdescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2CharacteristicdescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2CharacteristicdescriptionMaxFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionMaxFieldsModelSelector) => PokemonV2CharacteristicdescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2CharacteristicdescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2CharacteristicdescriptionMinFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionMinFieldsModelSelector) => PokemonV2CharacteristicdescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2CharacteristicdescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2CharacteristicdescriptionStddevFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionStddevFieldsModelSelector) => PokemonV2CharacteristicdescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2CharacteristicdescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector) => PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector) => PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2CharacteristicdescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2CharacteristicdescriptionSumFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionSumFieldsModelSelector) => PokemonV2CharacteristicdescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2CharacteristicdescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector) => PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector) => PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2CharacteristicdescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector | ((selector: PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector) => PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2CharacteristicdescriptionAggregateFields() {
  return new PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector()
}

export const pokemonV2CharacteristicdescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2CharacteristicdescriptionAggregateFields().count
