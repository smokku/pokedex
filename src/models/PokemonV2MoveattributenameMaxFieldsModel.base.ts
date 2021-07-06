/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveattributenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveattributenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename_max_fields"), "pokemon_v2_moveattributename_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_attribute_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MoveattributenameMaxFields() {
  return new PokemonV2MoveattributenameMaxFieldsModelSelector()
}

export const pokemonV2MoveattributenameMaxFieldsModelPrimitives = selectFromPokemonV2MoveattributenameMaxFields().language_id.move_attribute_id.name
