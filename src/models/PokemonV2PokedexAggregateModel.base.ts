/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexAggregateFieldsModel, PokemonV2PokedexAggregateFieldsModelType } from "./PokemonV2PokedexAggregateFieldsModel"
import { PokemonV2PokedexAggregateFieldsModelSelector } from "./PokemonV2PokedexAggregateFieldsModel.base"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexAggregateBase
 * auto generated base class for the model PokemonV2PokedexAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexAggregateModelBase = ModelBase
  .named('PokemonV2PokedexAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedex_aggregate"), "pokemon_v2_pokedex_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokedexAggregateFieldsModelSelector | ((selector: PokemonV2PokedexAggregateFieldsModelSelector) => PokemonV2PokedexAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokedexAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`nodes`, PokemonV2PokedexModelSelector, builder) }
}
export function selectFromPokemonV2PokedexAggregate() {
  return new PokemonV2PokedexAggregateModelSelector()
}

export const pokemonV2PokedexAggregateModelPrimitives = selectFromPokemonV2PokedexAggregate()
