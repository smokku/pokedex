/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaVarSampFieldsBase
 * auto generated base class for the model PokemonV2LocationareaVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareaVarSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_var_samp_fields"), "pokemon_v2_locationarea_var_samp_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaVarSampFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationareaVarSampFields() {
  return new PokemonV2LocationareaVarSampFieldsModelSelector()
}

export const pokemonV2LocationareaVarSampFieldsModelPrimitives = selectFromPokemonV2LocationareaVarSampFields().game_index.location_id
