/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeVarianceFieldsBase
 * auto generated base class for the model PokemonV2PokemonshapeVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonshapeVarianceFieldsModelBase = ModelBase
  .named('PokemonV2PokemonshapeVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_variance_fields"), "pokemon_v2_pokemonshape_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemonshapeVarianceFields() {
  return new PokemonV2PokemonshapeVarianceFieldsModelSelector()
}

export const pokemonV2PokemonshapeVarianceFieldsModelPrimitives = selectFromPokemonV2PokemonshapeVarianceFields()
