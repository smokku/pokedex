/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonhabitatnameAggregateModel, PokemonV2PokemonhabitatnameAggregateModelType } from "./PokemonV2PokemonhabitatnameAggregateModel"
import { PokemonV2PokemonhabitatnameAggregateModelSelector } from "./PokemonV2PokemonhabitatnameAggregateModel.base"
import { PokemonV2PokemonhabitatnameModel, PokemonV2PokemonhabitatnameModelType } from "./PokemonV2PokemonhabitatnameModel"
import { PokemonV2PokemonhabitatnameModelSelector } from "./PokemonV2PokemonhabitatnameModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatBase
 * auto generated base class for the model PokemonV2PokemonhabitatModel.
 *
 * columns and relationships of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatModelBase = ModelBase
  .named('PokemonV2Pokemonhabitat')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat"), "pokemon_v2_pokemonhabitat"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_pokemonhabitatnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonhabitatnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonhabitatnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonhabitatnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_pokemonhabitatnames(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatnames`, PokemonV2PokemonhabitatnameModelSelector, builder) }
  pokemon_v2_pokemonhabitatnames_aggregate(builder?: string | PokemonV2PokemonhabitatnameAggregateModelSelector | ((selector: PokemonV2PokemonhabitatnameAggregateModelSelector) => PokemonV2PokemonhabitatnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitatnames_aggregate`, PokemonV2PokemonhabitatnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonhabitat() {
  return new PokemonV2PokemonhabitatModelSelector()
}

export const pokemonV2PokemonhabitatModelPrimitives = selectFromPokemonV2Pokemonhabitat().name
