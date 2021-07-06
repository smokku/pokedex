/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesdescriptionAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_avg_fields"), "pokemon_v2_pokemonspeciesdescription_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionAvgFields() {
  return new PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionAvgFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionAvgFields().language_id.pokemon_species_id
