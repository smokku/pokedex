/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextMaxFieldsBase
 * auto generated base class for the model PokemonV2AbilityflavortextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityflavortextMaxFieldsModelBase = ModelBase
  .named('PokemonV2AbilityflavortextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_max_fields"), "pokemon_v2_abilityflavortext_max_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextMaxFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilityflavortextMaxFields() {
  return new PokemonV2AbilityflavortextMaxFieldsModelSelector()
}

export const pokemonV2AbilityflavortextMaxFieldsModelPrimitives = selectFromPokemonV2AbilityflavortextMaxFields().ability_id.flavor_text.language_id.version_group_id
