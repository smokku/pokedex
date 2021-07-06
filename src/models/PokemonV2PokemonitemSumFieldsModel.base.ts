/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonitemSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonitemSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonitemSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_sum_fields"), "pokemon_v2_pokemonitem_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    rarity: types.union(types.undefined, types.null, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonitemSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get rarity() { return this.__attr(`rarity`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonitemSumFields() {
  return new PokemonV2PokemonitemSumFieldsModelSelector()
}

export const pokemonV2PokemonitemSumFieldsModelPrimitives = selectFromPokemonV2PokemonitemSumFields().item_id.pokemon_id.rarity.version_id
