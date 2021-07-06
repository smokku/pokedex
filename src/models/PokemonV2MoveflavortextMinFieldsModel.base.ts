/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextMinFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveflavortextMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_min_fields"), "pokemon_v2_moveflavortext_min_fields"),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextMinFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextMinFields() {
  return new PokemonV2MoveflavortextMinFieldsModelSelector()
}

export const pokemonV2MoveflavortextMinFieldsModelPrimitives = selectFromPokemonV2MoveflavortextMinFields().flavor_text.language_id.move_id.version_group_id
