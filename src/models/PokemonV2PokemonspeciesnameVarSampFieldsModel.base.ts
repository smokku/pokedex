/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspeciesnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_var_samp_fields"), "pokemon_v2_pokemonspeciesname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonspeciesnameVarSampFields() {
  return new PokemonV2PokemonspeciesnameVarSampFieldsModelSelector()
}

export const pokemonV2PokemonspeciesnameVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesnameVarSampFields().language_id.pokemon_species_id
