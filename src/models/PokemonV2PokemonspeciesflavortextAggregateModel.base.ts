/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesflavortextAggregateFieldsModel, PokemonV2PokemonspeciesflavortextAggregateFieldsModelType } from "./PokemonV2PokemonspeciesflavortextAggregateFieldsModel"
import { PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateFieldsModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextAggregateBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextAggregateModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_aggregate"), "pokemon_v2_pokemonspeciesflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector) => PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonspeciesflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesflavortextAggregate() {
  return new PokemonV2PokemonspeciesflavortextAggregateModelSelector()
}

export const pokemonV2PokemonspeciesflavortextAggregateModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextAggregate()
