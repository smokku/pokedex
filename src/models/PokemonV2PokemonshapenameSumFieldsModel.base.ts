/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonshapenameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_sum_fields"), "pokemon_v2_pokemonshapename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameSumFields() {
  return new PokemonV2PokemonshapenameSumFieldsModelSelector()
}

export const pokemonV2PokemonshapenameSumFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameSumFields().language_id.pokemon_shape_id
