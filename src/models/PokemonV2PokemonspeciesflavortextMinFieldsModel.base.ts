/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesflavortextMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_min_fields"), "pokemon_v2_pokemonspeciesflavortext_min_fields"),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesflavortextMinFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonspeciesflavortextMinFields() {
  return new PokemonV2PokemonspeciesflavortextMinFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextMinFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextMinFields().flavor_text.language_id.pokemon_species_id.version_id
