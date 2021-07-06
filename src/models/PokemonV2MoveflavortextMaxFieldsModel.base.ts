/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveflavortextMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_max_fields"), "pokemon_v2_moveflavortext_max_fields"),
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

export class PokemonV2MoveflavortextMaxFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveflavortextMaxFields() {
  return new PokemonV2MoveflavortextMaxFieldsModelSelector()
}

export const pokemonV2MoveflavortextMaxFieldsModelPrimitives = selectFromPokemonV2MoveflavortextMaxFields().flavor_text.language_id.move_id.version_group_id
