/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesnameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_sum_fields"), "pokemon_v2_pokemonspeciesname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesnameSumFields() {
  return new PokemonV2PokemonspeciesnameSumFieldsModelSelector()
}

export const pokemonV2PokemonspeciesnameSumFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesnameSumFields().language_id.pokemon_species_id
