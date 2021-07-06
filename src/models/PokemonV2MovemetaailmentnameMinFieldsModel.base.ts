/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameMinFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetaailmentnameMinFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_min_fields"), "pokemon_v2_movemetaailmentname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_meta_ailment_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovemetaailmentnameMinFields() {
  return new PokemonV2MovemetaailmentnameMinFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameMinFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameMinFields().language_id.move_meta_ailment_id.name
