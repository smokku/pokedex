/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemondexnumberAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_avg_fields"), "pokemon_v2_pokemondexnumber_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokedex_id: types.union(types.undefined, types.null, types.number),
    pokedex_number: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemondexnumberAvgFields() {
  return new PokemonV2PokemondexnumberAvgFieldsModelSelector()
}

export const pokemonV2PokemondexnumberAvgFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberAvgFields().pokedex_id.pokedex_number.pokemon_species_id
