/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextMaxFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffectflavortextMaxFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_max_fields"), "pokemon_v2_contesteffectflavortext_max_fields"),
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

export class PokemonV2ContesteffectflavortextMaxFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffectflavortextMaxFields() {
  return new PokemonV2ContesteffectflavortextMaxFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextMaxFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextMaxFields().contest_effect_id.flavor_text.language_id
