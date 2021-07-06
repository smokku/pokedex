/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameSumFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokeathlonstatnameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_sum_fields"), "pokemon_v2_pokeathlonstatname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
}
export function selectFromPokemonV2PokeathlonstatnameSumFields() {
  return new PokemonV2PokeathlonstatnameSumFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameSumFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameSumFields().language_id.pokeathlon_stat_id
