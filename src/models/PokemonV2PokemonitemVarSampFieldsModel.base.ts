/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonitemVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonitemVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonitemVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_var_samp_fields"), "pokemon_v2_pokemonitem_var_samp_fields"),
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

export class PokemonV2PokemonitemVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get rarity() { return this.__attr(`rarity`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemonitemVarSampFields() {
  return new PokemonV2PokemonitemVarSampFieldsModelSelector()
}

export const pokemonV2PokemonitemVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonitemVarSampFields().item_id.pokemon_id.rarity.version_id
