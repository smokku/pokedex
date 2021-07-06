/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareanameSumFieldsBase
 * auto generated base class for the model PokemonV2PalparkareanameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PalparkareanameSumFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareanameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkareaname_sum_fields"), "pokemon_v2_palparkareaname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pal_park_area_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareanameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pal_park_area_id() { return this.__attr(`pal_park_area_id`) }
}
export function selectFromPokemonV2PalparkareanameSumFields() {
  return new PokemonV2PalparkareanameSumFieldsModelSelector()
}

export const pokemonV2PalparkareanameSumFieldsModelPrimitives = selectFromPokemonV2PalparkareanameSumFields().language_id.pal_park_area_id
