/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonhabitatnameMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_min_fields"), "pokemon_v2_pokemonhabitatname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameMinFields() {
  return new PokemonV2PokemonhabitatnameMinFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameMinFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameMinFields().language_id.name.pokemon_habitat_id
