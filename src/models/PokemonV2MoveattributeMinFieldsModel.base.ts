/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeMinFieldsBase
 * auto generated base class for the model PokemonV2MoveattributeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributeMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_min_fields"), "pokemon_v2_moveattribute_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MoveattributeMinFields() {
  return new PokemonV2MoveattributeMinFieldsModelSelector()
}

export const pokemonV2MoveattributeMinFieldsModelPrimitives = selectFromPokemonV2MoveattributeMinFields().name
