/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeSumFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributeSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_sum_fields"), "pokemon_v2_itemattribute_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemattributeSumFields() {
  return new PokemonV2ItemattributeSumFieldsModelSelector()
}

export const pokemonV2ItemattributeSumFieldsModelPrimitives = selectFromPokemonV2ItemattributeSumFields()
