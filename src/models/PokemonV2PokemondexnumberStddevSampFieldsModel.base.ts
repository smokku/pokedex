/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemondexnumberStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_stddev_samp_fields"), "pokemon_v2_pokemondexnumber_stddev_samp_fields"),
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

export class PokemonV2PokemondexnumberStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get pokedex_number() { return this.__attr(`pokedex_number`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemondexnumberStddevSampFields() {
  return new PokemonV2PokemondexnumberStddevSampFieldsModelSelector()
}

export const pokemonV2PokemondexnumberStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberStddevSampFields().pokedex_id.pokedex_number.pokemon_species_id
