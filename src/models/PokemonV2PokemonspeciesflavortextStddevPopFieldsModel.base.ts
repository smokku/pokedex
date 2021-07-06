/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_stddev_pop_fields"), "pokemon_v2_pokemonspeciesflavortext_stddev_pop_fields"),
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

export class PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonspeciesflavortextStddevPopFields() {
  return new PokemonV2PokemonspeciesflavortextStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextStddevPopFields().language_id.pokemon_species_id.version_id
