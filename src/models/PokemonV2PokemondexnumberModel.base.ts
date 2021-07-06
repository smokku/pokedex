/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberBase
 * auto generated base class for the model PokemonV2PokemondexnumberModel.
 *
 * columns and relationships of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberModelBase = ModelBase
  .named('PokemonV2Pokemondexnumber')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber"), "pokemon_v2_pokemondexnumber"),
    id: types.union(types.undefined, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    pokedex_number: types.union(types.undefined, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokedex: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexModel)),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  pokemon_v2_pokedex(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Pokemondexnumber() {
  return new PokemonV2PokemondexnumberModelSelector()
}

export const pokemonV2PokemondexnumberModelPrimitives = selectFromPokemonV2Pokemondexnumber().pokedex_id.pokedex_number.pokemon_species_id
