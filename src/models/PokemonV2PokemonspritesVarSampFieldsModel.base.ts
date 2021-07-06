/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspritesVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_var_samp_fields"), "pokemon_v2_pokemonsprites_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesVarSampFields() {
  return new PokemonV2PokemonspritesVarSampFieldsModelSelector()
}

export const pokemonV2PokemonspritesVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonspritesVarSampFields().pokemon_id
