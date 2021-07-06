/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameVarPopFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PalparkareanameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_var_pop_fields"), "pokemon_v2_palparkareaname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pal_park_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
}
export function selectFromPokemonV2PalparkareanameVarPopFields() {
  return new PokemonV2PalparkareanameVarPopFieldsModelSelector()
}

export const pokemonV2PalparkareanameVarPopFieldsModelPrimitives = selectFromPokemonV2PalparkareanameVarPopFields().language_id.pal_park_area_id
