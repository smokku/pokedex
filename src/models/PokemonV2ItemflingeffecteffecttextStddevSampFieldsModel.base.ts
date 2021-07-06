/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_stddev_samp_fields"), "pokemon_v2_itemflingeffecteffecttext_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextStddevSampFields() {
  return new PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextStddevSampFields().item_fling_effect_id.language_id
