/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemoncolorMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_max_fields"), "pokemon_v2_pokemoncolor_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2PokemoncolorMaxFields() {
  return new PokemonV2PokemoncolorMaxFieldsModelSelector()
}

export const pokemonV2PokemoncolorMaxFieldsModelPrimitives = selectFromPokemonV2PokemoncolorMaxFields().name
