/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameMaxFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PalparkareanameMaxFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_max_fields"), "pokemon_v2_palparkareaname_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pal_park_area_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
}
export function selectFromPokemonV2PalparkareanameMaxFields() {
  return new PokemonV2PalparkareanameMaxFieldsModelSelector()
}

export const pokemonV2PalparkareanameMaxFieldsModelPrimitives = selectFromPokemonV2PalparkareanameMaxFields().language_id.name.pal_park_area_id
