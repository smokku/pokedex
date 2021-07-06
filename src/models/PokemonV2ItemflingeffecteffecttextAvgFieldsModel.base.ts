/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemflingeffecteffecttextAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_avg_fields"), "pokemon_v2_itemflingeffecteffecttext_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextAvgFields() {
  return new PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextAvgFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextAvgFields().item_fling_effect_id.language_id
