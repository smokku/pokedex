/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2LocationnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_var_samp_fields"), "pokemon_v2_locationname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationnameVarSampFields() {
  return new PokemonV2LocationnameVarSampFieldsModelSelector()
}

export const pokemonV2LocationnameVarSampFieldsModelPrimitives = selectFromPokemonV2LocationnameVarSampFields().language_id.location_id
