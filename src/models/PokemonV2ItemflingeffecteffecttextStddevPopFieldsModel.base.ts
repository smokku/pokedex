/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_stddev_pop_fields"), "pokemon_v2_itemflingeffecteffecttext_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextStddevPopFields() {
  return new PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextStddevPopFields().item_fling_effect_id.language_id
