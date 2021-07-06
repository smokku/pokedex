/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectchangeeffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_max_fields"), "pokemon_v2_moveeffectchangeeffecttext_max_fields"),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_effect_change_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextMaxFields() {
  return new PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextMaxFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextMaxFields().effect.language_id.move_effect_change_id
