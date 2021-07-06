/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesflavortextStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesflavortextStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext_stddev_samp_fields"), "pokemon_v2_pokemonspeciesflavortext_stddev_samp_fields"),
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

export class PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonspeciesflavortextStddevSampFields() {
  return new PokemonV2PokemonspeciesflavortextStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonspeciesflavortextStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesflavortextStddevSampFields().language_id.pokemon_species_id.version_id
