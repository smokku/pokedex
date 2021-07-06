/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffecteffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_max_fields"), "pokemon_v2_contesteffecteffecttext_max_fields"),
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

export class PokemonV2ContesteffecteffecttextMaxFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffecteffecttextMaxFields() {
  return new PokemonV2ContesteffecteffecttextMaxFieldsModelSelector()
}

export const pokemonV2ContesteffecteffecttextMaxFieldsModelPrimitives = selectFromPokemonV2ContesteffecteffecttextMaxFields().contest_effect_id.effect.language_id
