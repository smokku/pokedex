/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesflavortextMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_max_fields"), "pokemon_v2_pokemonspeciesflavortext_max_fields"),
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

export class PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonspeciesflavortextMaxFields() {
  return new PokemonV2PokemonspeciesflavortextMaxFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextMaxFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextMaxFields().flavor_text.language_id.pokemon_species_id.version_id
