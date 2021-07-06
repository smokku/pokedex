/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2SupercontesteffectflavortextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_stddev_pop_fields"), "pokemon_v2_supercontesteffectflavortext_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    super_contest_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextStddevPopFields() {
  return new PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextStddevPopFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextStddevPopFields().language_id.super_contest_effect_id
