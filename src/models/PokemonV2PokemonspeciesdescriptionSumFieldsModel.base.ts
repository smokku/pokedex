/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesdescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_sum_fields"), "pokemon_v2_pokemonspeciesdescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionSumFields() {
  return new PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionSumFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionSumFields().language_id.pokemon_species_id
