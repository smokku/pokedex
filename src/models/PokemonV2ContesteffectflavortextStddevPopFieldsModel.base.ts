/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesteffectflavortextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_stddev_pop_fields"), "pokemon_v2_contesteffectflavortext_stddev_pop_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffectflavortextStddevPopFields() {
  return new PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextStddevPopFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextStddevPopFields().contest_effect_id.language_id
