/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexnameMaxFieldsBase
 * auto generated base class for the model PokemonV2PokedexnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokedexnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexname_max_fields"), "pokemon_v2_pokedexname_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
}
export function selectFromPokemonV2PokedexnameMaxFields() {
  return new PokemonV2PokedexnameMaxFieldsModelSelector()
}

export const pokemonV2PokedexnameMaxFieldsModelPrimitives = selectFromPokemonV2PokedexnameMaxFields().language_id.name.pokedex_id
