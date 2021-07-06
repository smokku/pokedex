/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextStddevFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesteffectflavortextStddevFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_stddev_fields"), "pokemon_v2_contesteffectflavortext_stddev_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextStddevFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffectflavortextStddevFields() {
  return new PokemonV2ContesteffectflavortextStddevFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextStddevFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextStddevFields().contest_effect_id.language_id
