/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonhabitatnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_variance_fields"), "pokemon_v2_pokemonhabitatname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameVarianceFields() {
  return new PokemonV2PokemonhabitatnameVarianceFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameVarianceFields().language_id.pokemon_habitat_id
