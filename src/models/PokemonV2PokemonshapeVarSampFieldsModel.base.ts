/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapeVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonshapeVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapeVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_var_samp_fields"), "pokemon_v2_pokemonshape_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonshapeVarSampFields() {
  return new PokemonV2PokemonshapeVarSampFieldsModelSelector()
}

export const pokemonV2PokemonshapeVarSampFieldsModelPrimitives = selectFromPokemonV2PokemonshapeVarSampFields()
