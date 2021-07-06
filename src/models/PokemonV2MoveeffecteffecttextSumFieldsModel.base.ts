/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextSumFieldsBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffecteffecttextSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_sum_fields"), "pokemon_v2_moveeffecteffecttext_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
}
export function selectFromPokemonV2MoveeffecteffecttextSumFields() {
  return new PokemonV2MoveeffecteffecttextSumFieldsModelSelector()
}

export const pokemonV2MoveeffecteffecttextSumFieldsModelPrimitives = selectFromPokemonV2MoveeffecteffecttextSumFields().language_id.move_effect_id
