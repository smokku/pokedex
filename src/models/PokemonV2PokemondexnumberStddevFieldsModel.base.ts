/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemondexnumberStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_stddev_fields"), "pokemon_v2_pokemondexnumber_stddev_fields"),
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

export class PokemonV2PokemondexnumberStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemondexnumberStddevFields() {
  return new PokemonV2PokemondexnumberStddevFieldsModelSelector()
}

export const pokemonV2PokemondexnumberStddevFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberStddevFields().pokedex_id.pokedex_number.pokemon_species_id
