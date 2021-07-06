/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapenameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonshapenameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapenameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename_stddev_pop_fields"), "pokemon_v2_pokemonshapename_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_shape_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonshapenameStddevPopFields() {
  return new PokemonV2PokemonshapenameStddevPopFieldsModelSelector()
}

export const pokemonV2PokemonshapenameStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemonshapenameStddevPopFields().language_id.pokemon_shape_id
