/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextVarPopFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_var_pop_fields"), "pokemon_v2_moveeffectchangeeffecttext_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_change_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextVarPopFields() {
  return new PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextVarPopFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextVarPopFields().language_id.move_effect_change_id
