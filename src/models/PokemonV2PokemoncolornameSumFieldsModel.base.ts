/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameSumFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemoncolornameSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_sum_fields"), "pokemon_v2_pokemoncolorname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameSumFields() {
  return new PokemonV2PokemoncolornameSumFieldsModelSelector()
}

export const pokemonV2PokemoncolornameSumFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameSumFields().language_id.pokemon_color_id
