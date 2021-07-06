/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextMinFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ContesteffectflavortextMinFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_min_fields"), "pokemon_v2_contesteffectflavortext_min_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.integer),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextMinFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffectflavortextMinFields() {
  return new PokemonV2ContesteffectflavortextMinFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextMinFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextMinFields().contest_effect_id.flavor_text.language_id
