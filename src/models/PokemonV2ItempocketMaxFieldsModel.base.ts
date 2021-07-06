/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketMaxFieldsBase
 * auto generated base class for the model PokemonV2ItempocketMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItempocketMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_max_fields"), "pokemon_v2_itempocket_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItempocketMaxFields() {
  return new PokemonV2ItempocketMaxFieldsModelSelector()
}

export const pokemonV2ItempocketMaxFieldsModelPrimitives = selectFromPokemonV2ItempocketMaxFields().name
