/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextVarianceFieldsBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesteffecteffecttextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_variance_fields"), "pokemon_v2_contesteffecteffecttext_variance_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffecteffecttextVarianceFields() {
  return new PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector()
}

export const pokemonV2ContesteffecteffecttextVarianceFieldsModelPrimitives = selectFromPokemonV2ContesteffecteffecttextVarianceFields().contest_effect_id.language_id
