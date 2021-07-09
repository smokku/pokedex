/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolornameModel, PokemonV2PokemoncolornameModelType } from "./PokemonV2PokemoncolornameModel"
import { PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorBase
 * auto generated base class for the model PokemonV2PokemoncolorModel.
 *
 * columns and relationships of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorModelBase = ModelBase
  .named('PokemonV2Pokemoncolor')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor"), "pokemon_v2_pokemoncolor"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_pokemoncolornames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolornameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemoncolornames_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_pokemoncolornames(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`pokemon_v2_pokemoncolornames`, PokemonV2PokemoncolornameModelSelector, builder) }
  pokemon_v2_pokemoncolornames_aggregate(builder?: string | PokemonV2PokemoncolornameAggregateModelSelector | ((selector: PokemonV2PokemoncolornameAggregateModelSelector) => PokemonV2PokemoncolornameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemoncolornames_aggregate`, PokemonV2PokemoncolornameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Pokemoncolor() {
  return new PokemonV2PokemoncolorModelSelector()
}

export const pokemonV2PokemoncolorModelPrimitives = selectFromPokemonV2Pokemoncolor().name
