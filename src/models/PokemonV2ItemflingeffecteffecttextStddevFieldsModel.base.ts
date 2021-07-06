/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_stddev_fields"), "pokemon_v2_itemflingeffecteffecttext_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextStddevFields() {
  return new PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextStddevFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextStddevFields().item_fling_effect_id.language_id
