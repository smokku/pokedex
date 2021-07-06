/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexnameAggregateFieldsModel, PokemonV2PokedexnameAggregateFieldsModelType } from "./PokemonV2PokedexnameAggregateFieldsModel"
import { PokemonV2PokedexnameAggregateFieldsModelSelector } from "./PokemonV2PokedexnameAggregateFieldsModel.base"
import { PokemonV2PokedexnameModel, PokemonV2PokedexnameModelType } from "./PokemonV2PokedexnameModel"
import { PokemonV2PokedexnameModelSelector } from "./PokemonV2PokedexnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameAggregateBase
 * auto generated base class for the model PokemonV2PokedexnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokedexname"
 */
export const PokemonV2PokedexnameAggregateModelBase = ModelBase
  .named('PokemonV2PokedexnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_aggregate"), "pokemon_v2_pokedexname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokedexnameAggregateFieldsModelSelector | ((selector: PokemonV2PokedexnameAggregateFieldsModelSelector) => PokemonV2PokedexnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokedexnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokedexnameModelSelector | ((selector: PokemonV2PokedexnameModelSelector) => PokemonV2PokedexnameModelSelector)) { return this.__child(`nodes`, PokemonV2PokedexnameModelSelector, builder) }
}
export function selectFromPokemonV2PokedexnameAggregate() {
  return new PokemonV2PokedexnameAggregateModelSelector()
}

export const pokemonV2PokedexnameAggregateModelPrimitives = selectFromPokemonV2PokedexnameAggregate()
