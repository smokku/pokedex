/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameSumFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareanameSumFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_sum_fields"), "pokemon_v2_locationareaname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
}
export function selectFromPokemonV2LocationareanameSumFields() {
  return new PokemonV2LocationareanameSumFieldsModelSelector()
}

export const pokemonV2LocationareanameSumFieldsModelPrimitives = selectFromPokemonV2LocationareanameSumFields().language_id.location_area_id
