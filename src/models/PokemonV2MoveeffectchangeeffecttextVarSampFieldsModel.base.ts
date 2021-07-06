/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextVarSampFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_var_samp_fields"), "pokemon_v2_moveeffectchangeeffecttext_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_change_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextVarSampFields() {
  return new PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextVarSampFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextVarSampFields().language_id.move_effect_change_id
