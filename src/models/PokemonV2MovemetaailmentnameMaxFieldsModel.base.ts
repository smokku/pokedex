/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentnameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetaailmentnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailmentname_max_fields"), "pokemon_v2_movemetaailmentname_max_fields"),
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

export class PokemonV2MovemetaailmentnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_meta_ailment_id() { return this.__attr(`move_meta_ailment_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovemetaailmentnameMaxFields() {
  return new PokemonV2MovemetaailmentnameMaxFieldsModelSelector()
}

export const pokemonV2MovemetaailmentnameMaxFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentnameMaxFields().language_id.move_meta_ailment_id.name
