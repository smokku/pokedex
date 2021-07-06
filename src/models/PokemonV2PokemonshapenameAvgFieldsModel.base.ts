/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonshapenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_avg_fields"), "pokemon_v2_pokemonshapename_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_shape_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameAvgFields() {
  return new PokemonV2PokemonshapenameAvgFieldsModelSelector()
}

export const pokemonV2PokemonshapenameAvgFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameAvgFields().language_id.pokemon_shape_id
