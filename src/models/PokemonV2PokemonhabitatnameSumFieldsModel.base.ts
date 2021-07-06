/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonhabitatnameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_sum_fields"), "pokemon_v2_pokemonhabitatname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameSumFields() {
  return new PokemonV2PokemonhabitatnameSumFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameSumFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameSumFields().language_id.pokemon_habitat_id
