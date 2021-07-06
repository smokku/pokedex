/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationVarSampFieldsBase
 * auto generated base class for the model PokemonV2LocationVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationVarSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_var_samp_fields"), "pokemon_v2_location_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2LocationVarSampFields() {
  return new PokemonV2LocationVarSampFieldsModelSelector()
}

export const pokemonV2LocationVarSampFieldsModelPrimitives = selectFromPokemonV2LocationVarSampFields().region_id
