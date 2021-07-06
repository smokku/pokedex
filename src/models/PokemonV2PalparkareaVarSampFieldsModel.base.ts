/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaVarSampFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkareaVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_var_samp_fields"), "pokemon_v2_palparkarea_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PalparkareaVarSampFields() {
  return new PokemonV2PalparkareaVarSampFieldsModelSelector()
}

export const pokemonV2PalparkareaVarSampFieldsModelPrimitives = selectFromPokemonV2PalparkareaVarSampFields()
