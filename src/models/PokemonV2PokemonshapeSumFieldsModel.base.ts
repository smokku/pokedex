/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonshapeSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_sum_fields"), "pokemon_v2_pokemonshape_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonshapeSumFields() {
  return new PokemonV2PokemonshapeSumFieldsModelSelector()
}

export const pokemonV2PokemonshapeSumFieldsModelPrimitives = selectFromPokemonV2PokemonshapeSumFields()
