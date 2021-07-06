/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_avg_fields"), "pokemon_v2_pokemonspeciesname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesnameAvgFields() {
  return new PokemonV2PokemonspeciesnameAvgFieldsModelSelector()
}

export const pokemonV2PokemonspeciesnameAvgFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesnameAvgFields().language_id.pokemon_species_id
