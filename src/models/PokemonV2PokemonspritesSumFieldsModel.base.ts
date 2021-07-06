/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspritesSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_sum_fields"), "pokemon_v2_pokemonsprites_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesSumFields() {
  return new PokemonV2PokemonspritesSumFieldsModelSelector()
}

export const pokemonV2PokemonspritesSumFieldsModelPrimitives = selectFromPokemonV2PokemonspritesSumFields().pokemon_id
