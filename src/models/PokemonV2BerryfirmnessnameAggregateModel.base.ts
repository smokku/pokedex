/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessnameAggregateFieldsModel, PokemonV2BerryfirmnessnameAggregateFieldsModelType } from "./PokemonV2BerryfirmnessnameAggregateFieldsModel"
import { PokemonV2BerryfirmnessnameAggregateFieldsModelSelector } from "./PokemonV2BerryfirmnessnameAggregateFieldsModel.base"
import { PokemonV2BerryfirmnessnameModel, PokemonV2BerryfirmnessnameModelType } from "./PokemonV2BerryfirmnessnameModel"
import { PokemonV2BerryfirmnessnameModelSelector } from "./PokemonV2BerryfirmnessnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameAggregateBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameAggregateModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_aggregate"), "pokemon_v2_berryfirmnessname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryfirmnessnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryfirmnessnameAggregateFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameAggregateFieldsModelSelector) => PokemonV2BerryfirmnessnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryfirmnessnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryfirmnessnameModelSelector | ((selector: PokemonV2BerryfirmnessnameModelSelector) => PokemonV2BerryfirmnessnameModelSelector)) { return this.__child(`nodes`, PokemonV2BerryfirmnessnameModelSelector, builder) }
}
export function selectFromPokemonV2BerryfirmnessnameAggregate() {
  return new PokemonV2BerryfirmnessnameAggregateModelSelector()
}

export const pokemonV2BerryfirmnessnameAggregateModelPrimitives = selectFromPokemonV2BerryfirmnessnameAggregate()
