/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavornameAggregateFieldsModel, PokemonV2BerryflavornameAggregateFieldsModelType } from "./PokemonV2BerryflavornameAggregateFieldsModel"
import { PokemonV2BerryflavornameAggregateFieldsModelSelector } from "./PokemonV2BerryflavornameAggregateFieldsModel.base"
import { PokemonV2BerryflavornameModel, PokemonV2BerryflavornameModelType } from "./PokemonV2BerryflavornameModel"
import { PokemonV2BerryflavornameModelSelector } from "./PokemonV2BerryflavornameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameAggregateBase
 * auto generated base class for the model PokemonV2BerryflavornameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berryflavorname"
 */
export const PokemonV2BerryflavornameAggregateModelBase = ModelBase
  .named('PokemonV2BerryflavornameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_aggregate"), "pokemon_v2_berryflavorname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavornameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavornameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryflavornameAggregateFieldsModelSelector | ((selector: PokemonV2BerryflavornameAggregateFieldsModelSelector) => PokemonV2BerryflavornameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryflavornameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`nodes`, PokemonV2BerryflavornameModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavornameAggregate() {
  return new PokemonV2BerryflavornameAggregateModelSelector()
}

export const pokemonV2BerryflavornameAggregateModelPrimitives = selectFromPokemonV2BerryflavornameAggregate()
