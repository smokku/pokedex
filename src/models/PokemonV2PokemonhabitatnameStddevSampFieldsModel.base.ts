/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonhabitatnameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_stddev_samp_fields"), "pokemon_v2_pokemonhabitatname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
}
export function selectFromPokemonV2PokemonhabitatnameStddevSampFields() {
  return new PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonhabitatnameStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonhabitatnameStddevSampFields().language_id.pokemon_habitat_id
