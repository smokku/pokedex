/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PalparkareanameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_stddev_pop_fields"), "pokemon_v2_palparkareaname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pal_park_area_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
}
export function selectFromPokemonV2PalparkareanameStddevPopFields() {
  return new PokemonV2PalparkareanameStddevPopFieldsModelSelector()
}

export const pokemonV2PalparkareanameStddevPopFieldsModelPrimitives = selectFromPokemonV2PalparkareanameStddevPopFields().language_id.pal_park_area_id
