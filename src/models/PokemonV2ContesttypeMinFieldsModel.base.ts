/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeMinFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ContesttypeMinFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_min_fields"), "pokemon_v2_contesttype_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ContesttypeMinFields() {
  return new PokemonV2ContesttypeMinFieldsModelSelector()
}

export const pokemonV2ContesttypeMinFieldsModelPrimitives = selectFromPokemonV2ContesttypeMinFields().name
