/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemflingeffecteffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_max_fields"), "pokemon_v2_itemflingeffecteffecttext_max_fields"),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextMaxFields() {
  return new PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextMaxFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextMaxFields().effect.item_fling_effect_id.language_id
