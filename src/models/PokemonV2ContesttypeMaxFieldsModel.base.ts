/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeMaxFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ContesttypeMaxFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_max_fields"), "pokemon_v2_contesttype_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ContesttypeMaxFields() {
  return new PokemonV2ContesttypeMaxFieldsModelSelector()
}

export const pokemonV2ContesttypeMaxFieldsModelPrimitives = selectFromPokemonV2ContesttypeMaxFields().name
