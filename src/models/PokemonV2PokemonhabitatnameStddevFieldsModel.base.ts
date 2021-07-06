/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonhabitatnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_stddev_fields"), "pokemon_v2_pokemonhabitatname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameStddevFields() {
  return new PokemonV2PokemonhabitatnameStddevFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameStddevFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameStddevFields().language_id.pokemon_habitat_id
