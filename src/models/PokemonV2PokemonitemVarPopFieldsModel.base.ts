/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemVarPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonitemVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonitemVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonitemVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_var_pop_fields"), "pokemon_v2_pokemonitem_var_pop_fields"),
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

export class PokemonV2PokemonitemVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get rarity() { return this.__attr(`rarity`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonitemVarPopFields() {
  return new PokemonV2PokemonitemVarPopFieldsModelSelector()
}

export const pokemonV2PokemonitemVarPopFieldsModelPrimitives = selectFromPokemonV2PokemonitemVarPopFields().item_id.pokemon_id.rarity.version_id
