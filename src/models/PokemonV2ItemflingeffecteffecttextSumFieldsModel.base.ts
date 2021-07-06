/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextSumFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemflingeffecteffecttextSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_sum_fields"), "pokemon_v2_itemflingeffecteffecttext_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextSumFields() {
  return new PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextSumFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextSumFields().item_fling_effect_id.language_id
