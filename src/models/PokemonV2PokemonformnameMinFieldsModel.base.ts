/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonformnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformnameMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_min_fields"), "pokemon_v2_pokemonformname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    pokemon_name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get pokemon_name() { return this.__attr(`pokemon_name`) }
}
export function selectFromPokemonV2PokemonformnameMinFields() {
  return new PokemonV2PokemonformnameMinFieldsModelSelector()
}

export const pokemonV2PokemonformnameMinFieldsModelPrimitives = selectFromPokemonV2PokemonformnameMinFields().language_id.name.pokemon_form_id.pokemon_name
