/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameVarSampFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PalparkareanameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_var_samp_fields"), "pokemon_v2_palparkareaname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pal_park_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
}
export function selectFromPokemonV2PalparkareanameVarSampFields() {
  return new PokemonV2PalparkareanameVarSampFieldsModelSelector()
}

export const pokemonV2PalparkareanameVarSampFieldsModelPrimitives = selectFromPokemonV2PalparkareanameVarSampFields().language_id.pal_park_area_id
