/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontestcomboVarSampFieldsBase
 * auto generated base class for the model PokemonV2SupercontestcomboVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2SupercontestcomboVarSampFieldsModelBase = ModelBase
  .named('PokemonV2SupercontestcomboVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontestcombo_var_samp_fields"), "pokemon_v2_supercontestcombo_var_samp_fields"),
    first_move_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    second_move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontestcomboVarSampFieldsModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
}
export function selectFromPokemonV2SupercontestcomboVarSampFields() {
  return new PokemonV2SupercontestcomboVarSampFieldsModelSelector()
}

export const pokemonV2SupercontestcomboVarSampFieldsModelPrimitives = selectFromPokemonV2SupercontestcomboVarSampFields().first_move_id.second_move_id
