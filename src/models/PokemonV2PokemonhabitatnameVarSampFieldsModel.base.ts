/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonhabitatnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_var_samp_fields"), "pokemon_v2_pokemonhabitatname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameVarSampFields() {
  return new PokemonV2PokemonhabitatnameVarSampFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameVarSampFields().language_id.pokemon_habitat_id
