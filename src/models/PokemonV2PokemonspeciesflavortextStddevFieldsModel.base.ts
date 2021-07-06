/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_stddev_fields"), "pokemon_v2_pokemonspeciesflavortext_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonspeciesflavortextStddevFields() {
  return new PokemonV2PokemonspeciesflavortextStddevFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextStddevFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextStddevFields().language_id.pokemon_species_id.version_id
