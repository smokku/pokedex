/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextVarianceFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_variance_fields"), "pokemon_v2_moveeffectchangeeffecttext_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_change_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextVarianceFields() {
  return new PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextVarianceFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextVarianceFields().language_id.move_effect_change_id
