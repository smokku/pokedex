/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformspritesVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_var_samp_fields"), "pokemon_v2_pokemonformsprites_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_form_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
}
export function selectFromPokemonV2PokemonformspritesVarSampFields() {
  return new PokemonV2PokemonformspritesVarSampFieldsModelSelector()
}

export const pokemonV2PokemonformspritesVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesVarSampFields().pokemon_form_id
