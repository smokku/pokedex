/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonshapenameMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_min_fields"), "pokemon_v2_pokemonshapename_min_fields"),
    awesome_name: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameMinFieldsModelSelector extends QueryBuilder {
  get awesome_name() { return this.__attr(`awesome_name`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameMinFields() {
  return new PokemonV2PokemonshapenameMinFieldsModelSelector()
}

export const pokemonV2PokemonshapenameMinFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameMinFields().awesome_name.language_id.name.pokemon_shape_id
