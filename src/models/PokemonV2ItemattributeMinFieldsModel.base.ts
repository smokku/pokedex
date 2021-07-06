/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeMinFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributeMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_min_fields"), "pokemon_v2_itemattribute_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemattributeMinFields() {
  return new PokemonV2ItemattributeMinFieldsModelSelector()
}

export const pokemonV2ItemattributeMinFieldsModelPrimitives = selectFromPokemonV2ItemattributeMinFields().name
