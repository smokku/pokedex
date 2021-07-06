/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameSumFieldsBase
 * auto generated base class for the model PokemonV2MoveattributenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributenameSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename_sum_fields"), "pokemon_v2_moveattributename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributenameSumFields() {
  return new PokemonV2MoveattributenameSumFieldsModelSelector()
}

export const pokemonV2MoveattributenameSumFieldsModelPrimitives = selectFromPokemonV2MoveattributenameSumFields().language_id.move_attribute_id
