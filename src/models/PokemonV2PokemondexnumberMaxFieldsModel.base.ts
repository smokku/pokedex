/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemondexnumberMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_max_fields"), "pokemon_v2_pokemondexnumber_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    pokedex_number: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemondexnumberMaxFields() {
  return new PokemonV2PokemondexnumberMaxFieldsModelSelector()
}

export const pokemonV2PokemondexnumberMaxFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberMaxFields().pokedex_id.pokedex_number.pokemon_species_id
