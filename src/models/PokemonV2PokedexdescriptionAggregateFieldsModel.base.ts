/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexdescriptionAvgFieldsModel, PokemonV2PokedexdescriptionAvgFieldsModelType } from "./PokemonV2PokedexdescriptionAvgFieldsModel"
import { PokemonV2PokedexdescriptionAvgFieldsModelSelector } from "./PokemonV2PokedexdescriptionAvgFieldsModel.base"
import { PokemonV2PokedexdescriptionMaxFieldsModel, PokemonV2PokedexdescriptionMaxFieldsModelType } from "./PokemonV2PokedexdescriptionMaxFieldsModel"
import { PokemonV2PokedexdescriptionMaxFieldsModelSelector } from "./PokemonV2PokedexdescriptionMaxFieldsModel.base"
import { PokemonV2PokedexdescriptionMinFieldsModel, PokemonV2PokedexdescriptionMinFieldsModelType } from "./PokemonV2PokedexdescriptionMinFieldsModel"
import { PokemonV2PokedexdescriptionMinFieldsModelSelector } from "./PokemonV2PokedexdescriptionMinFieldsModel.base"
import { PokemonV2PokedexdescriptionStddevFieldsModel, PokemonV2PokedexdescriptionStddevFieldsModelType } from "./PokemonV2PokedexdescriptionStddevFieldsModel"
import { PokemonV2PokedexdescriptionStddevFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevFieldsModel.base"
import { PokemonV2PokedexdescriptionStddevPopFieldsModel, PokemonV2PokedexdescriptionStddevPopFieldsModelType } from "./PokemonV2PokedexdescriptionStddevPopFieldsModel"
import { PokemonV2PokedexdescriptionStddevPopFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevPopFieldsModel.base"
import { PokemonV2PokedexdescriptionStddevSampFieldsModel, PokemonV2PokedexdescriptionStddevSampFieldsModelType } from "./PokemonV2PokedexdescriptionStddevSampFieldsModel"
import { PokemonV2PokedexdescriptionStddevSampFieldsModelSelector } from "./PokemonV2PokedexdescriptionStddevSampFieldsModel.base"
import { PokemonV2PokedexdescriptionSumFieldsModel, PokemonV2PokedexdescriptionSumFieldsModelType } from "./PokemonV2PokedexdescriptionSumFieldsModel"
import { PokemonV2PokedexdescriptionSumFieldsModelSelector } from "./PokemonV2PokedexdescriptionSumFieldsModel.base"
import { PokemonV2PokedexdescriptionVarPopFieldsModel, PokemonV2PokedexdescriptionVarPopFieldsModelType } from "./PokemonV2PokedexdescriptionVarPopFieldsModel"
import { PokemonV2PokedexdescriptionVarPopFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarPopFieldsModel.base"
import { PokemonV2PokedexdescriptionVarSampFieldsModel, PokemonV2PokedexdescriptionVarSampFieldsModelType } from "./PokemonV2PokedexdescriptionVarSampFieldsModel"
import { PokemonV2PokedexdescriptionVarSampFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarSampFieldsModel.base"
import { PokemonV2PokedexdescriptionVarianceFieldsModel, PokemonV2PokedexdescriptionVarianceFieldsModelType } from "./PokemonV2PokedexdescriptionVarianceFieldsModel"
import { PokemonV2PokedexdescriptionVarianceFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokedexdescriptionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_aggregate_fields"), "pokemon_v2_pokedexdescription_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokedexdescriptionAvgFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionAvgFieldsModelSelector) => PokemonV2PokedexdescriptionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokedexdescriptionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokedexdescriptionMaxFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionMaxFieldsModelSelector) => PokemonV2PokedexdescriptionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokedexdescriptionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokedexdescriptionMinFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionMinFieldsModelSelector) => PokemonV2PokedexdescriptionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokedexdescriptionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokedexdescriptionStddevFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionStddevFieldsModelSelector) => PokemonV2PokedexdescriptionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokedexdescriptionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokedexdescriptionStddevPopFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionStddevPopFieldsModelSelector) => PokemonV2PokedexdescriptionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokedexdescriptionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokedexdescriptionStddevSampFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionStddevSampFieldsModelSelector) => PokemonV2PokedexdescriptionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokedexdescriptionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokedexdescriptionSumFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionSumFieldsModelSelector) => PokemonV2PokedexdescriptionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokedexdescriptionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokedexdescriptionVarPopFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionVarPopFieldsModelSelector) => PokemonV2PokedexdescriptionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokedexdescriptionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokedexdescriptionVarSampFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionVarSampFieldsModelSelector) => PokemonV2PokedexdescriptionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokedexdescriptionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokedexdescriptionVarianceFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionVarianceFieldsModelSelector) => PokemonV2PokedexdescriptionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokedexdescriptionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokedexdescriptionAggregateFields() {
  return new PokemonV2PokedexdescriptionAggregateFieldsModelSelector()
}

export const pokemonV2PokedexdescriptionAggregateFieldsModelPrimitives = selectFromPokemonV2PokedexdescriptionAggregateFields().count
