/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextMaxFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontesteffectflavortextMaxFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_max_fields"), "pokemon_v2_supercontesteffectflavortext_max_fields"),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    super_contest_effect_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextMaxFields() {
  return new PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextMaxFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextMaxFields().flavor_text.language_id.super_contest_effect_id
