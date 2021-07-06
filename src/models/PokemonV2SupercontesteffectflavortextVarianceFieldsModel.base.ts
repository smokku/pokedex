/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextVarianceFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2SupercontesteffectflavortextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_variance_fields"), "pokemon_v2_supercontesteffectflavortext_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    super_contest_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
}
export function selectFromPokemonV2SupercontesteffectflavortextVarianceFields() {
  return new PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextVarianceFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextVarianceFields().language_id.super_contest_effect_id
