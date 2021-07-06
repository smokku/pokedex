/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonitemAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonitemAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonitemAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_avg_fields"), "pokemon_v2_pokemonitem_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    rarity: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonitemAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get rarity() { return this.__attr(`rarity`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonitemAvgFields() {
  return new PokemonV2PokemonitemAvgFieldsModelSelector()
}

export const pokemonV2PokemonitemAvgFieldsModelPrimitives = selectFromPokemonV2PokemonitemAvgFields().item_id.pokemon_id.rarity.version_id
