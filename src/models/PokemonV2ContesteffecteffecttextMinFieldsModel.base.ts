/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextMinFieldsBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ContesteffecteffecttextMinFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_min_fields"), "pokemon_v2_contesteffecteffecttext_min_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.integer),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextMinFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffecteffecttextMinFields() {
  return new PokemonV2ContesteffecteffecttextMinFieldsModelSelector()
}

export const pokemonV2ContesteffecteffecttextMinFieldsModelPrimitives = selectFromPokemonV2ContesteffecteffecttextMinFields().contest_effect_id.effect.language_id
