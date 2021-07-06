/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameSumFieldsBase
 * auto generated base class for the model PokemonV2LocationnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationnameSumFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_sum_fields"), "pokemon_v2_locationname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationnameSumFields() {
  return new PokemonV2LocationnameSumFieldsModelSelector()
}

export const pokemonV2LocationnameSumFieldsModelPrimitives = selectFromPokemonV2LocationnameSumFields().language_id.location_id
