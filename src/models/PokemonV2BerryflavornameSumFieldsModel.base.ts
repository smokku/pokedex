/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameSumFieldsBase
 * auto generated base class for the model PokemonV2BerryflavornameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavornameSumFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavornameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_sum_fields"), "pokemon_v2_berryflavorname_sum_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavornameSumFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryflavornameSumFields() {
  return new PokemonV2BerryflavornameSumFieldsModelSelector()
}

export const pokemonV2BerryflavornameSumFieldsModelPrimitives = selectFromPokemonV2BerryflavornameSumFields().berry_flavor_id.language_id
