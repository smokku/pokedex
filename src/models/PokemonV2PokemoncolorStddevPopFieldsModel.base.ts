/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorStddevPopFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemoncolorStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_stddev_pop_fields"), "pokemon_v2_pokemoncolor_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemoncolorStddevPopFields() {
  return new PokemonV2PokemoncolorStddevPopFieldsModelSelector()
}

export const pokemonV2PokemoncolorStddevPopFieldsModelPrimitives = selectFromPokemonV2PokemoncolorStddevPopFields()
