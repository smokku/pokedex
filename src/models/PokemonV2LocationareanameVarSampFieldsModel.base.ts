/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameVarSampFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LocationareanameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_var_samp_fields"), "pokemon_v2_locationareaname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameVarSampFields() {
  return new PokemonV2LocationareanameVarSampFieldsModelSelector()
}

export const pokemonV2LocationareanameVarSampFieldsModelPrimitives = selectFromPokemonV2LocationareanameVarSampFields().language_id.location_area_id
