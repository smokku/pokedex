/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_stddev_samp_fields"), "pokemon_v2_moveeffectchangeeffecttext_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_change_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextStddevSampFields() {
  return new PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextStddevSampFields().language_id.move_effect_change_id
