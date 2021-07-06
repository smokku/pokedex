/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexnameAvgFieldsModel, PokemonV2PokedexnameAvgFieldsModelType } from "./PokemonV2PokedexnameAvgFieldsModel"
import { PokemonV2PokedexnameAvgFieldsModelSelector } from "./PokemonV2PokedexnameAvgFieldsModel.base"
import { PokemonV2PokedexnameMaxFieldsModel, PokemonV2PokedexnameMaxFieldsModelType } from "./PokemonV2PokedexnameMaxFieldsModel"
import { PokemonV2PokedexnameMaxFieldsModelSelector } from "./PokemonV2PokedexnameMaxFieldsModel.base"
import { PokemonV2PokedexnameMinFieldsModel, PokemonV2PokedexnameMinFieldsModelType } from "./PokemonV2PokedexnameMinFieldsModel"
import { PokemonV2PokedexnameMinFieldsModelSelector } from "./PokemonV2PokedexnameMinFieldsModel.base"
import { PokemonV2PokedexnameStddevFieldsModel, PokemonV2PokedexnameStddevFieldsModelType } from "./PokemonV2PokedexnameStddevFieldsModel"
import { PokemonV2PokedexnameStddevFieldsModelSelector } from "./PokemonV2PokedexnameStddevFieldsModel.base"
import { PokemonV2PokedexnameStddevPopFieldsModel, PokemonV2PokedexnameStddevPopFieldsModelType } from "./PokemonV2PokedexnameStddevPopFieldsModel"
import { PokemonV2PokedexnameStddevPopFieldsModelSelector } from "./PokemonV2PokedexnameStddevPopFieldsModel.base"
import { PokemonV2PokedexnameStddevSampFieldsModel, PokemonV2PokedexnameStddevSampFieldsModelType } from "./PokemonV2PokedexnameStddevSampFieldsModel"
import { PokemonV2PokedexnameStddevSampFieldsModelSelector } from "./PokemonV2PokedexnameStddevSampFieldsModel.base"
import { PokemonV2PokedexnameSumFieldsModel, PokemonV2PokedexnameSumFieldsModelType } from "./PokemonV2PokedexnameSumFieldsModel"
import { PokemonV2PokedexnameSumFieldsModelSelector } from "./PokemonV2PokedexnameSumFieldsModel.base"
import { PokemonV2PokedexnameVarPopFieldsModel, PokemonV2PokedexnameVarPopFieldsModelType } from "./PokemonV2PokedexnameVarPopFieldsModel"
import { PokemonV2PokedexnameVarPopFieldsModelSelector } from "./PokemonV2PokedexnameVarPopFieldsModel.base"
import { PokemonV2PokedexnameVarSampFieldsModel, PokemonV2PokedexnameVarSampFieldsModelType } from "./PokemonV2PokedexnameVarSampFieldsModel"
import { PokemonV2PokedexnameVarSampFieldsModelSelector } from "./PokemonV2PokedexnameVarSampFieldsModel.base"
import { PokemonV2PokedexnameVarianceFieldsModel, PokemonV2PokedexnameVarianceFieldsModelType } from "./PokemonV2PokedexnameVarianceFieldsModel"
import { PokemonV2PokedexnameVarianceFieldsModelSelector } from "./PokemonV2PokedexnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokedexname"
 */
export const PokemonV2PokedexnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_aggregate_fields"), "pokemon_v2_pokedexname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokedexnameAvgFieldsModelSelector | ((selector: PokemonV2PokedexnameAvgFieldsModelSelector) => PokemonV2PokedexnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokedexnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokedexnameMaxFieldsModelSelector | ((selector: PokemonV2PokedexnameMaxFieldsModelSelector) => PokemonV2PokedexnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokedexnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokedexnameMinFieldsModelSelector | ((selector: PokemonV2PokedexnameMinFieldsModelSelector) => PokemonV2PokedexnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokedexnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokedexnameStddevFieldsModelSelector | ((selector: PokemonV2PokedexnameStddevFieldsModelSelector) => PokemonV2PokedexnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokedexnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokedexnameStddevPopFieldsModelSelector | ((selector: PokemonV2PokedexnameStddevPopFieldsModelSelector) => PokemonV2PokedexnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokedexnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokedexnameStddevSampFieldsModelSelector | ((selector: PokemonV2PokedexnameStddevSampFieldsModelSelector) => PokemonV2PokedexnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokedexnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokedexnameSumFieldsModelSelector | ((selector: PokemonV2PokedexnameSumFieldsModelSelector) => PokemonV2PokedexnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokedexnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokedexnameVarPopFieldsModelSelector | ((selector: PokemonV2PokedexnameVarPopFieldsModelSelector) => PokemonV2PokedexnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokedexnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokedexnameVarSampFieldsModelSelector | ((selector: PokemonV2PokedexnameVarSampFieldsModelSelector) => PokemonV2PokedexnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokedexnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokedexnameVarianceFieldsModelSelector | ((selector: PokemonV2PokedexnameVarianceFieldsModelSelector) => PokemonV2PokedexnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokedexnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokedexnameAggregateFields() {
  return new PokemonV2PokedexnameAggregateFieldsModelSelector()
}

export const pokemonV2PokedexnameAggregateFieldsModelPrimitives = selectFromPokemonV2PokedexnameAggregateFields().count
