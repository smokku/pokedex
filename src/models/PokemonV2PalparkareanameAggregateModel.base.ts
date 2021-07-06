/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkareanameAggregateFieldsModel, PokemonV2PalparkareanameAggregateFieldsModelType } from "./PokemonV2PalparkareanameAggregateFieldsModel"
import { PokemonV2PalparkareanameAggregateFieldsModelSelector } from "./PokemonV2PalparkareanameAggregateFieldsModel.base"
import { PokemonV2PalparkareanameModel, PokemonV2PalparkareanameModelType } from "./PokemonV2PalparkareanameModel"
import { PokemonV2PalparkareanameModelSelector } from "./PokemonV2PalparkareanameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameAggregateBase
 * auto generated base class for the model PokemonV2PalparkareanameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameAggregateModelBase = ModelBase
  .named('PokemonV2PalparkareanameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_aggregate"), "pokemon_v2_palparkareaname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareanameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkareanameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PalparkareanameAggregateFieldsModelSelector | ((selector: PokemonV2PalparkareanameAggregateFieldsModelSelector) => PokemonV2PalparkareanameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PalparkareanameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PalparkareanameModelSelector | ((selector: PokemonV2PalparkareanameModelSelector) => PokemonV2PalparkareanameModelSelector)) { return this.__child(`nodes`, PokemonV2PalparkareanameModelSelector, builder) }
}
export function selectFromPokemonV2PalparkareanameAggregate() {
  return new PokemonV2PalparkareanameAggregateModelSelector()
}

export const pokemonV2PalparkareanameAggregateModelPrimitives = selectFromPokemonV2PalparkareanameAggregate()
