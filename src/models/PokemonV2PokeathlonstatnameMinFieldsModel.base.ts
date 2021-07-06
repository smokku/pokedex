/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameMinFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokeathlonstatnameMinFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_min_fields"), "pokemon_v2_pokeathlonstatname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2PokeathlonstatnameMinFields() {
  return new PokemonV2PokeathlonstatnameMinFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameMinFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameMinFields().language_id.name.pokeathlon_stat_id
