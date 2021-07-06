/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributedescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_min_fields"), "pokemon_v2_moveattributedescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributedescriptionMinFields() {
  return new PokemonV2MoveattributedescriptionMinFieldsModelSelector()
}

export const pokemonV2MoveattributedescriptionMinFieldsModelPrimitives = selectFromPokemonV2MoveattributedescriptionMinFields().description.language_id.move_attribute_id
