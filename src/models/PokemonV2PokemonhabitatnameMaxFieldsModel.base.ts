/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonhabitatnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_max_fields"), "pokemon_v2_pokemonhabitatname_max_fields"),
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

export class PokemonV2PokemonhabitatnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameMaxFields() {
  return new PokemonV2PokemonhabitatnameMaxFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameMaxFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameMaxFields().language_id.name.pokemon_habitat_id
