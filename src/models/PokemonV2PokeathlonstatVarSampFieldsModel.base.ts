/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatVarSampFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokeathlonstatVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_var_samp_fields"), "pokemon_v2_pokeathlonstat_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatVarSampFields() {
  return new PokemonV2PokeathlonstatVarSampFieldsModelSelector()
}

export const pokemonV2PokeathlonstatVarSampFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatVarSampFields()
