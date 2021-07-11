/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameModel.
 *
 * columns and relationships of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameModelBase = ModelBase
  .named('PokemonV2Pokemonspeciesname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname"), "pokemon_v2_pokemonspeciesname"),
    genus: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameModelSelector extends QueryBuilder {
  get genus() { return this.__attr(`genus`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonspeciesname() {
  return new PokemonV2PokemonspeciesnameModelSelector()
}

export const pokemonV2PokemonspeciesnameModelPrimitives = selectFromPokemonV2Pokemonspeciesname().genus.language_id.name.pokemon_species_id
