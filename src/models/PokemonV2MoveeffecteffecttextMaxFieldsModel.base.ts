/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffecteffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_max_fields"), "pokemon_v2_moveeffecteffecttext_max_fields"),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    short_effect: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextMaxFieldsModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
}
export function selectFromPokemonV2MoveeffecteffecttextMaxFields() {
  return new PokemonV2MoveeffecteffecttextMaxFieldsModelSelector()
}

export const pokemonV2MoveeffecteffecttextMaxFieldsModelPrimitives = selectFromPokemonV2MoveeffecteffecttextMaxFields().effect.language_id.move_effect_id.short_effect
