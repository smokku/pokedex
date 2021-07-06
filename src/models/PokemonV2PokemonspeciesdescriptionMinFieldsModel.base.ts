/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesdescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_min_fields"), "pokemon_v2_pokemonspeciesdescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionMinFields() {
  return new PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionMinFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionMinFields().description.language_id.pokemon_species_id
