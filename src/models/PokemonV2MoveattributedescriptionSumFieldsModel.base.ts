/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionSumFieldsBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributedescriptionSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_sum_fields"), "pokemon_v2_moveattributedescription_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributedescriptionSumFields() {
  return new PokemonV2MoveattributedescriptionSumFieldsModelSelector()
}

export const pokemonV2MoveattributedescriptionSumFieldsModelPrimitives = selectFromPokemonV2MoveattributedescriptionSumFields().language_id.move_attribute_id
