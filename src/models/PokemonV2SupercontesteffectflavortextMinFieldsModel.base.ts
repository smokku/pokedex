/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextMinFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2SupercontesteffectflavortextMinFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_min_fields"), "pokemon_v2_supercontesteffectflavortext_min_fields"),
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

export class PokemonV2SupercontesteffectflavortextMinFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextMinFields() {
  return new PokemonV2SupercontesteffectflavortextMinFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextMinFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextMinFields().flavor_text.language_id.super_contest_effect_id
