/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributedescriptionVarPopFieldsBase
 * auto generated base class for the model PokemonV2MoveattributedescriptionVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributedescriptionVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributedescriptionVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributedescription_var_pop_fields"), "pokemon_v2_moveattributedescription_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_attribute_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributedescriptionVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_attribute_id() { return this.__attr(`move_attribute_id`) }
}
export function selectFromPokemonV2MoveattributedescriptionVarPopFields() {
  return new PokemonV2MoveattributedescriptionVarPopFieldsModelSelector()
}

export const pokemonV2MoveattributedescriptionVarPopFieldsModelPrimitives = selectFromPokemonV2MoveattributedescriptionVarPopFields().language_id.move_attribute_id
