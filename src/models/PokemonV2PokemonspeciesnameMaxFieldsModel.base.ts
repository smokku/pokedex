/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_max_fields"), "pokemon_v2_pokemonspeciesname_max_fields"),
    genus: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameMaxFieldsModelSelector extends QueryBuilder {
  get genus() { return this.__attr(`genus`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesnameMaxFields() {
  return new PokemonV2PokemonspeciesnameMaxFieldsModelSelector()
}

export const pokemonV2PokemonspeciesnameMaxFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesnameMaxFields().genus.language_id.name.pokemon_species_id
