/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspeciesdescriptionVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_variance_fields"), "pokemon_v2_pokemonspeciesdescription_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionVarianceFields() {
  return new PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionVarianceFields().language_id.pokemon_species_id
