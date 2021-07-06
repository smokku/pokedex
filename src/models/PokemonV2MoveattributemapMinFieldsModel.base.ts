/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapMinFieldsBase
 * auto generated base class for the model PokemonV2MoveattributemapMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributemapMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributemapMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_min_fields"), "pokemon_v2_moveattributemap_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get move_id() { return this.__attr(`move_id`) }
}
export function selectFromPokemonV2MoveattributemapMinFields() {
  return new PokemonV2MoveattributemapMinFieldsModelSelector()
}

export const pokemonV2MoveattributemapMinFieldsModelPrimitives = selectFromPokemonV2MoveattributemapMinFields().move_attribute_id.move_id
