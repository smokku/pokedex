/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflingeffectModel, PokemonV2ItemflingeffectModelType } from "./PokemonV2ItemflingeffectModel"
import { PokemonV2ItemflingeffectModelSelector } from "./PokemonV2ItemflingeffectModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextModel.
 *
 * columns and relationships of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextModelBase = ModelBase
  .named('PokemonV2Itemflingeffecteffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext"), "pokemon_v2_itemflingeffecteffecttext"),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_itemflingeffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_itemflingeffect(builder?: string | PokemonV2ItemflingeffectModelSelector | ((selector: PokemonV2ItemflingeffectModelSelector) => PokemonV2ItemflingeffectModelSelector)) { return this.__child(`pokemon_v2_itemflingeffect`, PokemonV2ItemflingeffectModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Itemflingeffecteffecttext() {
  return new PokemonV2ItemflingeffecteffecttextModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextModelPrimitives = selectFromPokemonV2Itemflingeffecteffecttext().effect.item_fling_effect_id.language_id
