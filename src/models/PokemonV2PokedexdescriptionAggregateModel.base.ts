/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexdescriptionAggregateFieldsModel, PokemonV2PokedexdescriptionAggregateFieldsModelType } from "./PokemonV2PokedexdescriptionAggregateFieldsModel"
import { PokemonV2PokedexdescriptionAggregateFieldsModelSelector } from "./PokemonV2PokedexdescriptionAggregateFieldsModel.base"
import { PokemonV2PokedexdescriptionModel, PokemonV2PokedexdescriptionModelType } from "./PokemonV2PokedexdescriptionModel"
import { PokemonV2PokedexdescriptionModelSelector } from "./PokemonV2PokedexdescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionAggregateBase
 * auto generated base class for the model PokemonV2PokedexdescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionAggregateModelBase = ModelBase
  .named('PokemonV2PokedexdescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription_aggregate"), "pokemon_v2_pokedexdescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexdescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokedexdescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokedexdescriptionAggregateFieldsModelSelector | ((selector: PokemonV2PokedexdescriptionAggregateFieldsModelSelector) => PokemonV2PokedexdescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokedexdescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokedexdescriptionModelSelector | ((selector: PokemonV2PokedexdescriptionModelSelector) => PokemonV2PokedexdescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2PokedexdescriptionModelSelector, builder) }
}
export function selectFromPokemonV2PokedexdescriptionAggregate() {
  return new PokemonV2PokedexdescriptionAggregateModelSelector()
}

export const pokemonV2PokedexdescriptionAggregateModelPrimitives = selectFromPokemonV2PokedexdescriptionAggregate()
